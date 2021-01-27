export default class {
    constructor() {
         this.button.addEventListener('click', this.onButtonClick.bind(this), false);
    }
    
    onButtonClick() {

        var options = {
          valueNames: [ 'letter' ],
          item: '<li><p class="letter"></p></li>'
        };

        new List('abc-list', options, this.rows);
    }

    get button() {
        return document.getElementById('task2');
    }
    
    get rows() {
        return [
            {letter: 'A'}, 
            {letter: 'B'}, 
            {letter: 'C'}
        ];
    }
}