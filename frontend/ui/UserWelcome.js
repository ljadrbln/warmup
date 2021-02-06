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
        
        this.shadowRoot.querySelector('p').addEventListener('click', this.onParagraphClick.bind(this), false);
        
        this.listen('connectedCallback called');
        
        super.connectedCallback();
    }
    
    onParagraphClick() {
        this.listen('paragraph clicked');
    }
}

customElements.define('user-welcome', UserWelcome);