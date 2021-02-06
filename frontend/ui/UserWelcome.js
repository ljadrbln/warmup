class UserWelcome extends CustomComponent {
    constructor() {
        super();
        this.listen('constructor called');
    }
    
    connectedCallback() {
        this.attachShadow( {mode: 'open'} );
        let color = this.getAttribute('color');
        
        this.shadowRoot.innerHTML = `
            <style>
                .red {
                    color: red;
                }
                .green {
                    color: green;
                }
            </style>
            <p class="${color}">Welcome, <slot name="username">Anonimus</slot></p>
        `;
        
        this.listen('connectedCallback called');
        
        super.connectedCallback();
    }
}

customElements.define('user-welcome', UserWelcome);