import Scrollbar from './scrollbar';
import '../styles/scrollbars/shastaScrollbar.css';

class ShastaScrollbar extends Scrollbar{

  init(){
    this.scrollbar.classList = '';
    this.thumb.classList = '';
    this.veil.classList = '';

    this.scrollbar.classList.add('shastascrollbar');
    this.scrollbar.classList.add('scrollbar');
    this.thumb.classList.add('shastathumb');
    this.thumb.classList.add('thumb');
    this.thumb.setAttribute('style', "background: url(assets/images/ShastaZ28.png);");

    this.veil.classList.add('shastaveil');
    this.veil.classList.add('veil');
    this.veil.setAttribute('draggable', 'true');
    
    document.querySelector('body').appendChild(this.scrollbar);
    this.scrollbar.appendChild(this.thumb);
    this.scrollbar.appendChild(this.veil);

    this.thumbHeight = 28;
  }
}

export {ShastaScrollbar as default};