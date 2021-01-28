export default class {
    constructor() {
         this.showD3CmpButton.addEventListener('click', this.onShowD3ButtonClick.bind(this), false);
         this.showWelcomeCmpButton.addEventListener('click', this.onShowWelcomeButtonClick.bind(this), false);
    }
    
    onShowD3ButtonClick() {
        this.welcomeColumn.classList.remove('is-hidden');
        this.d3Column.classList.add('is-hidden');
    }
    
    onShowWelcomeButtonClick() {
        this.welcomeColumn.classList.add('is-hidden');
        this.d3Column.classList.remove('is-hidden');        
    }

    get showD3CmpButton() {
        return document.getElementById('task8_1');
    }
    
    get showWelcomeCmpButton() {
        return document.getElementById('task8_2');
    }
    
    get d3Column() {
        return document.querySelector('.column.d3');
    }
    
    get welcomeColumn(){
        return document.querySelector('.column.welcome');
    }
}