export default class XContentPlacer extends HTMLElement {
    constructor() {
        super();
        let innerHTML = this.innerHTML;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = innerHTML;
        this.style.position = "absolute";
        this.style.width = "20%";
        this.style.height = "20%";
        this.style.margin = "0";
        this.style.top = this.getAttribute('y');
        this.style.left = this.getAttribute('x');
    }
}