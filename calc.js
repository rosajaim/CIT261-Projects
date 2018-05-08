const calculator = {
    number1: 0,
    number2: 0,
    operation: '',
    inputOuput: document.getElementById('calcInput'),
    // clear: function () {
    //     this.inputOuput
    // },

    buttonClicked: function (button) {
        console.log(button.innerHTML);
        let inputBox = document.getElementById('calcInput');

        switch (button.innerHTML) {
            case 'M':
                break;
            case 'C':
                break;
            case '/':
                break;
            case 'X':
                break;
            case '-':
                break;
            case '+':
                break;
            case '=':
                break;
            default:
                //if it made it to here it's a number
                inputBox.value = inputBox.value + button.innerHTML;
        }
    }
}