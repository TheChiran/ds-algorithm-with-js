import LinkedListNode from "../LinkedList/LinkedListNode.mjs";

/**
 * @Title {Stack using linked list}
 */
class Stack {
    constructor() {
        this.top = null;
    }

    /**
     * @Title {Method to push / add value}
     */
    push(value) {
        //create a new node temp and allocate memory
        let temp = new LinkedListNode(0);

        // check if stack (heap) is full. if full, then inserting an
        // element would lead to stack overflow
        if (temp === null) {
            console.log('Head overflow');
            return;
        }

        // initialize data into temp data field
        temp.value = value;

        // put top reference into temp link
        temp.next = this.top;

        // update top reference
        this.top = temp;
    }

    /**
     * @Title {isEmpty -> To check if the stack is empty}
     */
    isEmpty() {
        return this.top || null;
    }

    /**
     * @Title {peek -> method to return top element in stack}
     */
    peek() {
        if (this.isEmpty() !== null) {
            return this.top.value;
        } else {
            console.log('Stack is empty');
            return -1;
        }
    }

    /**
     * @Title {pop -> method to pop / remove top element from stack}
     */
    pop() {
        // check for stack underflow
        if (this.top === null) {
            console.log('Stack underflow');
            return;
        }

        // Update the top pointer to point to next node
        this.top = this.top.next;
    }

    /**
     * @Title {display -> method to display elements}
     */
    display() {
        // check for stack underflow
        if (this.top === null) {
            console.log('Stack underflow');
            return;
        } else {
            let temp = this.top;

            while (temp !== null) {
                console.log(`${temp.value}-> `);
                temp = temp.next;
            }
        }
    }
}
let stack = new Stack();
// insert Stack value
stack.push(11);
stack.push(22);
stack.push(33);
stack.push(44);


// print Stack elements
stack.display();
console.log('peek value', stack.peek());


// Delete top element of Stack
stack.pop();
stack.pop();

// print Stack elements
stack.display();