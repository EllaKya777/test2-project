import {model} from './model.js';

import './styles/main.css';


const site = document.querySelector('#site');

model.forEach(block => {
    site.insertAdjacentHTML('beforeend', block.toHTML())  
})


class Sidebar{
    constructor(){
        this.el = document.getElementById('panel');
        this.init()
    }

    init(){
        this.el.insertAdjacentHTML('beforeend', this.sidebarInner)
    }
    get sidebarInner() {  
        return  `
        <div class="list-group">
      <button type="button" class="list-group-item list-group-item-action active">
        Cras justo odio
      </button>
      <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
      <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
      <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
      <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
    </div>
        `
    }
}


const sidebar = new Sidebar('panel')


