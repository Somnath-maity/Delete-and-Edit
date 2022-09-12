var form = document.getElementById('addForm'); 
var itemList = document.getElementById('items'); 

// Form submit event 
form.addEventListener('submit', addItem);  
// delete event 
itemList.addEventListener('click', removeItem);

// Add item 
function addItem(e){
    e.preventDefault(); 

    // Get input value 
    var newItem = document.getElementById('item').value; 

    // Create new li element 
    var li = document.createElement('li'); 
    // Add class 
    li.className = 'list-group-item'; 
    // Add text node with input value 
    li.appendChild(document.createTextNode(newItem));  


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