var  list=document.getElementById("list");


function addTodo(){
    var todoItem=document.getElementById("todo-item")



    // crete    li tag with text node
var li=document.createElement('li')
var liText=document.createTextNode(todoItem.value) 
li.appendChild(liText)

// create delete button
// make buton in first three lines
var delBtn=document.createElement("button")
var delText=document.createTextNode("Delete")
delBtn.appendChild(delText)

delBtn.setAttribute("class","btn")
delBtn.setAttribute("onclick","deleteItem(this)")
// add in list
li.appendChild(delBtn)


// create edit button
// button is ready in firt three lines
var editBtn=document.createElement("button")
var editText=document.createTextNode("edit")
editBtn.appendChild(editText)

editBtn.setAttribute("class","btn")
editBtn.setAttribute("onclick","editItem(this)")
// add in list
li.appendChild(editBtn)




// add li in ul
list.appendChild(li)
// make input null after press
todoItem.value='';
    // console.log(li)
}
function deleteItem(g){
g.parentNode.remove()

}
    // delete all
function deleteALl(){
    list.innerHTML='';
}
function editItem(f){
    // var val =f.parentNode.firstChild.nodeValue;
    var editValue=prompt("Enter edit value",f.parentNode.firstChild.nodeValue)
    f.parentNode.firstChild.nodeValue=editValue

    console.log(f.parentNode.firstChild)
}