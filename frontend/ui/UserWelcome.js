class UserWelcome extends HTMLElement {
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
    }
}

customElements.define('user-welcome', UserWelcome);