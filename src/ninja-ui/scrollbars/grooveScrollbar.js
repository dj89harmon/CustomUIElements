import Scrollbar from './scrollbar';
import '../styles/scrollbars/grooveScrollbar.css';

class shrunkenScrollbar extends Scrollbar{

  init(){
    this.scrollbar.classList = '';
    this.thumb.classList = '';
    this.veil.classList = '';

    this.scrollbar.classList.add('groovescrollbar');
    this.scrollbar.classList.add('scrollbar');
    this.thumb.classList.add('groovethumb');
    this.thumb.classList.add('thumb');

    this.veil = document.createElement('div');
    this.veil.classList.add('grooveveil');
    this.veil.classList.add('veil');
    
    document.querySelector('body').appendChild(this.scrollbar);
    this.scrollbar.appendChild(this.thumb);
    this.scrollbar.appendChild(this.veil);

    this.thumbHeight = 140;
  }

  drag(e){
    
    const body = document.querySelector('body');
    const thumb = document.querySelector('.thumb');
    const veil = document.querySelector('.veil');

    const thumbPos = e.clientY - 15;

    if(e.clientY <= 15){
      thumb.style.top = 0;
      veil.style.top = 0;
      scrollTo(0,0);
    }
    else if(e.clientY >= window.innerHeight - 15){
      thumb.style.top = window.innerHeight - this.thumbHeight;
      veil.style.top = window.innerHeight - this.thumbHeight;
      scrollTo(0, body.scrollHeight);
    } else {
      thumb.style.top = thumbPos;
      veil.style.top = thumbPos;

      const scrollPos = (body.scrollHeight - window.innerHeight) * (thumbPos / (window.innerHeight - 30));
      
      scrollTo(0, scrollPos);
    }
  }
}

export {shrunkenScrollbar as default};

//863 is scrollablePixels
//7251 is body.scrollHeight
//y is yOffset?
//x is "top"