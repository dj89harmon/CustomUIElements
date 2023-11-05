import Scrollbar from './scrollbar';
import '../styles/scrollbars/elevatorScrollbar.css';


class ElevatorScrollbar extends Scrollbar{
  init(){
    this.scrollbar.classList = '';
    this.thumb.classList = '';
    this.veil.classList = '';

    this.scrollbar.classList.add('elevatorscrollbar');
    this.scrollbar.classList.add('scrollbar');
    this.thumb.classList.add('elevatorthumb');
    this.thumb.classList.add('thumb');
    
    this.veil.classList.add('elevatorveil');
    this.veil.classList.add('veil');
    this.veil.setAttribute('draggable', 'true');
    
    document.querySelector('body').appendChild(this.scrollbar);
    this.scrollbar.appendChild(this.thumb);
    this.scrollbar.appendChild(this.veil);

    this.thumbHeight = 32;
  }
}

export {ElevatorScrollbar as default}
