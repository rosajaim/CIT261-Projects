const h1 = document.getElementById('title');
    const listItems = document.getElementsByTagName('li');
    console.log(listItems);

const flash = document.createElement('li');    //create the an element node
flash.textContent = 'Flash'; //create the text node and appends the text node

function createElement (tag,text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el
    }
const aquaman = createElement('li','Aquaman');
heroes.appendChild(flash);

heroes.appendChild(wonderWoman);

const h1 = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText,oldText);

const heroes = document.getElementById('roster');
const superman = heroes.children[0];

superman.style.border = "red 2px solid";
superman.style.backgroundColor = 'blue';

superman.style.display = 'none';