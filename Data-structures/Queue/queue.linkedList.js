import LinkedListNode from "../LinkedList/LinkedListNode.mjs";

/**
 * @Title {Queue using linked list}
 */
class Queue {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    /**
     * @Title {Enqueue -> Method to push new element}
     */
    enqueue(element) {
        let node = new LinkedListNode(element);
        let current;

        // check if head is empty
        // if true-> add node to head
        if (this.head === null) {
            this.head = node;
        } else {
            // Add the node as
            // Next element of existing list
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    /**
     * @Title {Dequeue -> Method to remove first element from queue list}
     */
    dequeue(element) {
        let current = this.head;
        // 5->4->3->2<-1
        // If there is item then remove it
        if (current) {
            let element = current.value;
            current = current.next;
            this.head = current;
            this.length--;
            return element;
        }

        return null;
    }

    /**
     * @Title {Front -> Method to get first element from queue list}
     */
    front() {
        if (this.head) return this.head.value;

        return null;
    }

    /**
     * @Title {Rear -> Method to get last element from queue list}
     */
    rear(element) {
        let current = this.head;

        if (current === null) return null;

        while (current.next) {
            current = current.next;
        }

        return current.value;
    }

    /**
     * @Title {Get List -> Method to get queue list as array} 
     */
    getList() {
        let current = this.head,
            queueList = [];

        if (current === null) return [];

        while (current) {
            queueList.push(current.value);
            current = current.next;
        }

        return queueList;
    }

    /**
     * @Title {Is Empty -> Method to check if queue is empty}
     */
    isEmpty() {
        return this.length === 0 ? true : false;
    }

    /**
     * @Title {get size -> Method to get size of queue list}
     */
    getSize() {
        return this.length;
    }

    /**
     * @Title {get size -> Method to get size of queue list}
     */
    clearQueue() {
        this.head = null;
        this.length = 0;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.getList());

queue.dequeue();

console.log(queue.getList());
queue.clearQueue();
console.log(queue.getList());