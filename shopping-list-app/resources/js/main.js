const data = (localStorage.getItem('shopList')) ? JSON.parse(localStorage.getItem('shopList')) : {
  shop: [],
  purchased: []
};

// Remove and purchase icons in SVG format
const removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
const purchaseSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

rendershopList();

const clickEvent = (function () {
  if ('ontouchstart' in document.documentElement === true)
    return 'touchstart';
  else
    return 'click';
})();
console.log(clickEvent);

// User clicked on the add button
// If there is any text inside the item field, add that text to the shop list. If the user clicks the add 
// buton without entering an item a popout window "You must enter an item" will display. 
document.getElementById('add').addEventListener('click', function () {
  let value = document.getElementById('item').value;
  if (value) {
    addItem(value);
  }
  if (value === '') {
    alert("You must enter an item!");
  }
});

//If there is any text inside the item field, add that when pressing 'Enter' key
document.getElementById('item').addEventListener('keydown', function (e) {
  let value = this.value;
  if (e.code === 'Enter' && value) {
    addItem(value);
  }
});

function addItem(value) {
  addItemshopM(value);
  document.getElementById('item').value = '';

  data.shop.push(value);
  dataObjectUpdated();

}

function rendershopList() {
  if (!data.shop.length && !data.purchased.length) return;

  for (let i = 0; i < data.shop.length; i++) {
    let value = data.shop[i];
    addItemshopM(value);
  }

  for (let j = 0; j < data.purchased.length; j++) {
    let value = data.purchased[j];
    addItemshopM(value, true);
  }
}

function dataObjectUpdated() {
  localStorage.setItem('shopList', JSON.stringify(data));
}

//removes items from the shopping list
function removeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;
  let value = item.innerText;

  if (id === 'shop') {
    data.shop.splice(data.shop.indexOf(value), 1);
  } else {
    data.purchased.splice(data.purchased.indexOf(value), 1);
  }
  dataObjectUpdated();

  parent.removeChild(item);
}

function purchaseItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;
  let value = item.innerText;

  if (id === 'shop') {
    data.shop.splice(data.shop.indexOf(value), 1);
    data.purchased.push(value);
  } else {
    data.purchased.splice(data.purchased.indexOf(value), 1);
    data.shop.push(value);
  }
  dataObjectUpdated();

}

//clears shopping list
function clearList() {
  document.getElementById("shop").innerHTML = "";
}

let target = document.querySelector('ul');
target.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('strike');
  }
}, false);

// Adds a new item to the shop list
function addItemshopM(text, purchased) {
  let list = (purchased) ? document.getElementsByClassName('strike') : document.getElementById('shop');

  const item = document.createElement('li');
  item.innerText = text;

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  const remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;


  // Add click event for removing the item
  remove.addEventListener('click', removeItem);


  // buttons.appendChild(purchase);
  buttons.appendChild(remove);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);

}