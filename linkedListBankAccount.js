/*
Why I would use linked list?
A linked list can grow and shrink in size during execution of the program. linked list can be 
made just as long as required  and it allocates memory as the list grows unlike arrays which 
have fix size. Moreover, the main advatage to use it is that it stores data contiguously in memory, 
which make insertion and deletion operations easy i.e. linked list inserts or removes nodes 
from the list without reorganization of the entire data structure.
*/

//Importing Expres Framework
const express = require ('express');

//Creating express app
const app = express();

const port = 9000;

//start server and listen to the port 9000
app.listen(port);

// Defining Node Class
class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

//Defining Linkedlist Class
class LinkedList{
    constructor(){
        this.head = null
    }


//Inserting Value in the linked list
addItem(data){

    // creating new node
    let node = new Node(data); 

    // when list is empty making node the head node
    if(this.head === null){    
        this.head = node;
    } else {
        
        // assigning head node to currentNode 
        let currentNode = this.head;

        // traversing till the end node
        while(currentNode.next !== null){
            currentNode  = currentNode.next;
        }
        
        //assign the new node to the end of the list
        currentNode.next = node;
        }
    }
}


// function to create the linkedlist from the array
function newLinkedList(accounts) {

    // Creating list object
    let list = new LinkedList();
    
    // adding elements from array using foreach
    accounts.forEach(element => {
        list.addItem(element);        
    });

    return list;
}

// function to find specific record by name
function getAccountByName(name,list){
   
    let currentNode = list.head;
    
    //traverse through list to search the item
    while (currentNode) {
      if (currentNode.data.name === name) {
        return currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return null;
}

//Array to store deposit details of customers
let accounts=[
    {id:1,name:'Alex',deposit:5},
    {id:2,name:'Sarah',deposit:5},
    {id:3,name:'Jim',deposit:15}
]

// Creating newLinkedList Object and passing the array
var linkedList = newLinkedList(accounts);


//end point to display full linked list data
app.get('/records',function(req,res){
    console.log(linkedList);
    res.send(linkedList);
});

//end point to display specific records
app.get('/user',function(req,res){
    let text = req.query.text;
    let account = getAccountByName(text,linkedList);    

    if (account === null){
        res.send('Account not found');
    }else{
        res.send(account);
    }
});