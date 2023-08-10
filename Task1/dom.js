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

const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// console.log(headerTitle.textContent); 
// console.log(headerTitle.innerText); 
// headerTitle.innerHTML = '<h3>Hello</h3>';

const mainHeader = document.getElementById('main-header');
mainHeader.style.borderBottom = '5px solid black';

const addItem = document.getElementById('add-item');
addItem.innerHTML = '<strong>Add Item</strong>';
addItem.style.color = 'green';


const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';


for(var i=0; i<items.length ;i++){
    items[i].style.fontWeight = 'bold';
}
