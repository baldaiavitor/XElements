export default class XApp extends HTMLElement {
    constructor() {
        super();
        let innerHTML = this.innerHTML;
        this.innerHTML = innerHTML;
        this.style.position = "absolute";
        this.style.width = "100%";
        this.style.height = "100%";
        this.style.margin = "0";
        this.style.top = "0px";
        this.style.left = "0px";
    }
}