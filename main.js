var form = document.getElementById('addForm'); 
var itemList = document.getElementById('items');  
var filter = document.getElementById('filter');

// Form submit event 
form.addEventListener('submit', addItem);  
// delete event 
itemList.addEventListener('click', removeItem); 
// filter event 
filter.addEventListener('keyup', filterItems); 
// // filter event 
// filter.addEventListener('keyup', filterItem); 

// Add item 
function addItem(e){
    e.preventDefault(); 

    // Get input value 
    var newItem = document.getElementById('item').value; 
    var newItem1 = document.getElementById('itemone').value; 
    // Create new li element 
    var li = document.createElement('li'); 
    // Add class 
    li.className = 'list-group-item'; 
    // Add text node with input value 
    li.appendChild(document.createTextNode(newItem));  
    li.appendChild(document.createTextNode(newItem1));  


    // Create delet button element 
    var deletBtn = document.createElement('button'); 
    // Add clases to del button 
    deletBtn.className= 'btn btn-danger btn-sm float-right delete'; 
    // Append text node 
    deletBtn.appendChild(document.createTextNode('X'));  
    // Append button to li
li.appendChild(deletBtn);


// Create edit button element   
var editBtn = document.createElement('button'); 
// Add clases to del button 
editBtn.className= 'btn btn-danger btn-sm float-right delete'; 
// Append text node 
editBtn.appendChild(document.createTextNode('edit'));  
// Append button to li
li.appendChild(editBtn); 

// Append li to list
    itemList.appendChild(li);
}  

function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement; 
        itemList.removeChild(li);
    }
}
}   

// Filter Items 
function filterItems(e) {
    // convert text to lowercase 
    var text = e.target.value.toLowerCase(); 
    console.log(text);  

    // var text1 = e.target.value.toLowerCase(); 
    // console.log(text1);  

    // Get lis 
    var items = itemList.getElementsByTagName('li'); 
    // Convert to an array 
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent; 
        if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display = 'block'; 
        } else{
            item.style.display = 'none';
        }
    });  

    // Convert to an array 
    Array.from(items).forEach(function(itemone){
        var itemName1 = itemone.childNodes[1].textContent; 
        if(itemName1.toLowerCase().indexOf(text)!=-1){
            itemone.style.display = 'block'; 
        } else{
            itemone.style.display = 'none';
        }
    }); 
}
