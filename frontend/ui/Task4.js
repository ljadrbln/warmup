export default class {
    constructor() {
         this.button.addEventListener('click', this.onButtonClick.bind(this), false);
    }
    
    onButtonClick() {
        this.button.setAttribute('disabled', true);
        
        let url = 'http://localhost:3000';
        
        fetch(url, {method: 'POST'})
            .finally( () => this.button.removeAttribute('disabled') )
            .then(response => response.json())
            .then(json => console.log('JSON: ', json) );        
    }

    get button() {
        return document.getElementById('task4');
    }
}