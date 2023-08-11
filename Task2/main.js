var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

//for submit event
form.addEventListener('submit',addItem);
//for delete 
itemList.addEventListener('click',removeItem);
//for filter
// filter.addEventListener('keyup',filterItems);


//add item
function addItem(e){
    e.preventDefault();
    // console.log(1);

    //get the input value
    var newItem = document.getElementById('item').value;

    //create new element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    // console.log(li);  
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
// function filterItems(e){
//     e.preventDefault();
//     //convert to lower case to match everything
//     var text = e.target.value.toLowerCase();
//     //get li list
//     var items = itemList.getElementsByTagName('li');
    
//     Array.from(items).forEach(function(item){
//         var itemName = item.firstChild.textContent;
//         console.log(itemName);
//     })
// }