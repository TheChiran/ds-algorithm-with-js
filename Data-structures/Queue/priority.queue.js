import QueueElement from "./Helper/Queue.Element.mjs";
import Queue from "./queue.array.mjs";
/**
 * @Title {Priority Queue -> Using array}
 * @Description {Queue works in FIFO(First In First Out) order}
 */

class PriorityQueue extends Queue {
    constructor() {
        super();
    }

    /**
     * @Title {Enqueue -> Method to implement / add new element into queue list}  
     */
    enqueue(element, priority) {
        let queueElement = new QueueElement(element, priority);
        let contain = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > queueElement.priority) {
                this.items.splice(i, 0, queueElement);
                contain = true;
                break;
            }
        }

        if (!contain) this.items.push(queueElement);

    }

    printList() {
        let list = [];
        for (let i = 0; i < this.items.length; i++) {
            list.push(this.items[i].element);
        }
        return list.join(", ");
    }
}

let priorityQueue = new PriorityQueue();

// testing isEmpty and front on an empty queue
// return true
console.log(priorityQueue.isEmpty());

// returns "No elements in Queue"
console.log(priorityQueue.front());

// adding elements to the queue
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);

// prints [Gourav Piyush Sumit Sunny Sheru]
console.log(priorityQueue.printList());

// prints Gourav
console.log(priorityQueue.front().element);

// prints Sheru
console.log(priorityQueue.rear().element);

// removes Gouurav
// priorityQueue contains
// [Piyush Sumit Sunny Sheru]
console.log(priorityQueue.dequeue().element);

// Adding another element to the queue
priorityQueue.enqueue("Sunil", 2);

// prints [Piyush Sumit Sunny Sunil Sheru]
console.log(priorityQueue.printList());