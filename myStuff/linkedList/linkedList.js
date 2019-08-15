
//Node Class

//here's an example of a single node
class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

//new instance of node w/data
n1=new Node(100);
console.log(n1);


//Here's an example of a basic LinkedList class:
class LinkedList {
    constructor(){
        this.head=null; //null at start
        this.size = 0
    }

    //insert first node
    insertFirst(data){
        this.head= new Node(data , this.head); //2nd arg = this.head because if there is data here, then we want to make it the 'next' arg
        this.size++ //increase the size of list after new data is inserted from front
    }

    //insert last node
    insertLast(data){
        let node = new Node(data);
        let current;

        // INITIAL CASE : if list is empty, make head
        if(this.head === null){
            this.head = node;

        }else{
            //.. if head already exists... loop through
            current = this.head; //start at beginning ...

            while (current.next){ //allows you to traverse list
                current = current.next
            }

            current.next = node //set/create the next node to a new node
        }
        this.size++ //move to the next node created
    }

    //insert at index





    //get at/from index

    //remove at index

    //clear list

    //print list data
    printListData(){
        let current = this.head // we're saying we want to start from the head/ beginning

        while(current){
            console.log(current.data);
            current = current.next //then loop to next node
        }
    }

}

//----- ------  -----   -----   -----   -----   -----   -----   -----
//                      to check our the Linked List Class
//----- ------  -----   -----   -----   -----   -----   -----   -----
//

const myLinkedList = new LinkedList(); //   1.)Instantiate a new Linked List
myLinkedList.insertFirst(100); //  2.) Use the method we created in LinkedList class
myLinkedList.insertFirst(200);
myLinkedList.insertFirst(300); //notice that as we insert from the First, previous node values get moved toward the tail

myLinkedList.insertLast(400);
myLinkedList.insertLast('is this the last?');


myLinkedList.printListData();

console.log(myLinkedList);

