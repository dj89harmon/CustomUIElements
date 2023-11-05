class Scrollbar{
  constructor(){
    this.scrollbar = document.createElement('div');
    this.thumb = document.createElement('div');
    this.veil = document.createElement('div');
  }

  init(){
    this.scrollbar.classList.add('scrollbar');
    this.thumb.classList.add('thumb');

    this.veil.classList.add('veil');
    this.veil.setAttribute('draggable', 'true');
    
    document.querySelector('body').appendChild(this.scrollbar);
    this.scrollbar.appendChild(this.thumb);
    this.scrollbar.appendChild(this.veil);

    
    this.isDown = false;

    this.thumbHeight;
  }

  destroy(){
    document.querySelector('.scrollbar').remove();
  }

  scroll(){
    const body = document.querySelector('body');
    const thumb = document.querySelector('.thumb');
    const veil = document.querySelector('.veil');
    
    const pixels = (body.scrollHeight - body.clientHeight) - window.pageYOffset;
    const percentHeight = Math.abs(((pixels * 100) / (body.scrollHeight - body.clientHeight)) - 100);

    //replace the "16" with the height of the thumb in scrollbar.css file
    const top = (body.clientHeight - this.thumbHeight) * (percentHeight / 100);
    thumb.style.top = top;
    veil.style.top = top;
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

  endDrag(e){
    
    console.log('drag end initiated');
    const thumb = document.querySelector('.thumb');
    const veil = document.querySelector('.veil');

    if(e.clientY <= 14){
      thumb.style.top = 0;
      veil.style.top = 0;
    }
    else if(e.clientY >= window.innerHeight - 15){
      thumb.style.top = window.innerHeight - this.thumbHeight;
      veil.style.top = window.innerHeight - this.thumbHeight;
    } else {
      thumb.style.top = e.clientY - 15;
      veil.style.top = e.clientY - 15;
    }
    console.log(this.thumbHeight);
    this.drag(e);
  }

  handleThumbMouseDown(e){
    console.log('mouse down in scrollbar.js');
    console.log(e);
    this.isDown = true;
  }

  handleThumbMouseUp(e){
    console.log('mouse up in scrollbar.js');
    this.isDown = false;
    console.log(this.thumbHeight);
  }

  handleThumbMouseMove(e){
    if(!this.isDown) return;
    e.preventDefault();
    const y = e.clientY;
    this.drag(e);
    console.log('is down in scrollbar.js', y);
  }
}

export {Scrollbar as default}