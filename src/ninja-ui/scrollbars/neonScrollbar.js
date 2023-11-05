import Scrollbar from './scrollbar';
import '../styles/scrollbars/neonScrollbar.css';

class NeonScrollbar extends Scrollbar{

  init(){
    this.scrollbar.classList = '';
    this.thumb.classList = '';
    this.veil.classList = '';

    this.scrollbar.classList.add('neonscrollbar');
    this.scrollbar.classList.add('scrollbar');
    this.thumb.classList.add('neonthumb');
    this.thumb.classList.add('thumb');

    this.veil = document.createElement('div');
    this.veil.classList.add('neonveil');
    this.veil.classList.add('veil');
    
    document.querySelector('body').appendChild(this.scrollbar);
    this.scrollbar.appendChild(this.thumb);
    this.scrollbar.appendChild(this.veil);

    this.thumbHeight = 100;
  }
}

export {NeonScrollbar as default};