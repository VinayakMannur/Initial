// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = "VIN";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// console.log(document.getElementById('header-title'));

// const headerTitle = document.getElementById('header-title');
// // console.log(headerTitle);
// // headerTitle.textContent = 'hello';
// // console.log(headerTitle.textContent); 
// // console.log(headerTitle.innerText); 
// // headerTitle.innerHTML = '<h3>Hello</h3>';

// const mainHeader = document.getElementById('main-header');
// mainHeader.style.borderBottom = '5px solid black';

// const addItem = document.getElementById('add-item');
// addItem.innerHTML = '<strong>Add Item</strong>';
// addItem.style.color = 'green';


// const items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// // items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';


// for(var i=0; i<items.length ;i++){
//     items[i].style.fontWeight = 'bold';
// }


// const li = document.getElementsByTagName('li');
// // console.log(li)
// // console.log(li[1]);
// // li[1].textContent = 'Hello 2';
// // li[2].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';
// for(var i=0; i<li.length ;i++){
//     li[i].style.fontWeight = 'bold';
// }


// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px black';

// const input = document.querySelector('input');
// input.value = 'Hello World';

// var submit= document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var ite = document.querySelector('.list-group-item');
// ite.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var lastItem = document.querySelector('.list-group-item:nth-child(2)');
// lastItem.style.backgroundColor = 'green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'green';

var titles = document.querySelectorAll('.list-group-item');
console.log(titles)
// titles[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

for ( var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
    // even[i].style.backgroundColor = '#ccc';
}