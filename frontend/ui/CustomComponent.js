class CustomComponent extends HTMLElement {
    messages = [];
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.setAttribute('hasLog', true);
    }
    
    listen(message){
        message = `${Math.floor(Date.now() / 1000)}, ${message}`;
        
        if(this.messages.length > 100 ) {
            this.messages.shift();
        }
        
        this.messages.push(message);
    }
    
    say() {
        return this.messages;
    }
}

customElements.define('custom-component', CustomComponent);