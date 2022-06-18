/**
 * @Title {Queue -> Using array}
 * @Description {Queue works in FIFO(First In First Out) order}
 */

export default class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * @Title {isEmpty -> Method to check if queue list empty}  
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * @Title {Enqueue -> Method to implement / add new element into queue list}  
     */
    enqueue(element) {
        this.items.push(element);
    }

    /**
     * @Title {Dequeue -> Method to remove first pushed element from queue list}  
     */
    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    /**
     * @Title {Front -> Method to return first / front element from queue list}  
     */
    front() {
        if (this.isEmpty()) return "Underflow";
        return this.items[0];
    }

    /**
     * @Title {Read -> Method to return last / rear element from queue list}  
     */
    rear() {
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[this.items.length - 1];
    }

    /**
     * @Title {PrintQueue -> Method to display/print queue list}  
     */
    printList() {
        let list = "";
        for (let i = 0; i < this.items.length; i++) {
            list += this.items[i] + " ";
        }
        return list;
    }
}

// const queue = new Queue();
// console.log(queue.dequeue());
// console.log(queue.isEmpty());

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.enqueue(8);

// console.log('Front: ', queue.front());
// console.log('Dequeue: ', queue.dequeue());
// console.log('Front: ', queue.front());
// console.log('List: ', queue.printList());