export default class XContentPlacer extends HTMLElement {
    static get observedAttributes() {
        return ['x','y'];
    }

    constructor() {
        super();
        let innerHTML = this.innerHTML;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = innerHTML;
        this.style.width = "20%";
        this.style.height = "20%";
        this.style.margin = "0";
        this.style.position = "absolute";
        this.style.top = this.hasAttribute('y') ? this.getAttribute('y') : "0px";
        this.style.left = this.hasAttribute('x') ? this.getAttribute('x') : "0px";
        this.style.width = this.hasAttribute('width') ? this.getAttribute('width') : "40%";
        this.style.height = this.hasAttribute('height') ? this.getAttribute('height') : "40%";
    }
    set x(val){
        this.style.left = val;
    }
    get x(){
        return this.style.left;
    }
    set y(val){
        this.style.top = val;
    }
    get y(){
        return this.style.top;
    }
    set width(val){
        this.style.width = val;
    }
    get width(){
        return this.style.width;
    }
    set height(val){
        this.style.height = val;
    }
    get height(){
        return this.style.height;
    }
    attributeChangedCallback(name, oldValue, newValue) { // (4)
    
    }
}