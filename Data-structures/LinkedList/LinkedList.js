import LinkedListNode from './LinkedListNode.mjs';

/**
 * @Title {Linked List example}
 * @Example {10(index->0) -> 20(index->1) -> 30(index->2) -> 40(index->3) -> 50(index->4)}
 */

export default class LinkedList {
  constructor(value) {
    //Creates a head node
    this.head = {
      value: value,
      next: null
    };
    //As there is only one element in the list, head is also a tail
    this.tail = this.head;
    //Length would be 1
    this.length = 1;
  }

  /**
   * @Title {Append -> Add data into last index}
   * @Param {data -> What value we want to insert}
   */
  append(data) {
    let newNode = new LinkedListNode(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  /**
   * @Title {Prepend -> Add data into first index}
   * @Param {data -> What value we want to insert}
   */
  prepend(data) {
    if (this.head !== null) {
      const newNode = new LinkedListNode(data);
      newNode.next = this.head;

      this.head = newNode;
      this.length++;
      return this;
    } else if (this.head === null) {
      this.head = {
        value: data,
        next: null
      }
    }

  }

  /**
   * @Title {Insert at specific node}
   * @Param {index -> where we want to insert}
   * @Param {value -> What value we want to insert}
   */
  insert(index, value) {
    let newNode = new LinkedListNode(value);

    let count = 1;

    // Temporary node to traverse through list, point it to the head
    let previousNode = this.head;

    // Loop to find previous node for current node
    while (count < index) {
      previousNode = previousNode.next;

      // Increase the count
      count++;
    }

    // We will be able to have the temp node after loop ends
    newNode = previousNode.next;

    previousNode.next = newNode;
  }

  /**
   * @Title {Delete head}
   * 
   */
  deleteHead() {
    this.head = this.head.next;
    this.length--;
  }

  /**
   * @Title {Delete tail}
   * 
   */
  deleteTail() {
    let secondLastNode = this.head;
    while (secondLastNode.next.next !== null) {
      secondLastNode = secondLastNode.next;
    }
    secondLastNode.next = null;
    this.length--;
  }

  /**
   * @Title {Delete head}
   * 
   */
  deleteNode() {
    this.head = this.head.next;
    this.length--;
  }

  /**
   * @Title {Delete node at index}
   * @Param {index}
   * 
   */
  removeByIndex(index) {
    /**
     * @Title {Linked List example}
     * @Param {index}
     * @Example {10(index->0) -> 20(index->1) -> 30(index->2) -> 40(index->3) -> 50(index->4)}
     * 1. Index should not be <0
     * 2. Index should not be greater > length
     */
    if (index < 0) return;

    else if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    let count = 1;
    let previousNode = this.head;

    while (count < index) {
      previousNode = previousNode.next;
      count++;
    }

    previousNode.next = previousNode.next;
    this.length--;

    return this;
  }

  /**
   * @Title {Delete node by specified value}
   * @Param {value}
   * 
   */
  removeByValue(value) {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (previousNode === null) {
          this.head = currentNode.next;
        } else {
          previousNode.next = currentNode.next;
        }
        this.length--;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

  }

  /**
   * @Title {Search node by specified value}
   * @Param {value}
   * 
   */
  searchElement(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  /**
   * @Title {Search and get node value by specified index}
   * @Param {index}
   * 
   */
  getNthElement(index) {
    let currentNode = this.head;
    if (index === 0) return currentNode.value;

    currentNode = currentNode.next;

    let count = 1;
    while (currentNode !== null) {
      if (index === count) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
      count++;

    }
    return null;
  }

  /**
   * @Title {Print nodes list}
   * 
   */
  printList() {
    let listArray = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray.join('-> ');
  }

  /**
   * @Title {Print nodes list with next pointer}
   * 
   */
  printListWithPointer() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(`Data: ${currentNode.value},Next: ${currentNode?.next?.value || null}`);
      currentNode = currentNode.next;
    }
  }

  /**
   * @Title {Reserve linked list}
   * 
   */
  reserve() {
    // 20->2->3->4->5
    // 5->4->3->2->20
    if (this.head === null) return;

    let currentNode = this.head,
      previousNode = null,
      nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = nextNode;

      nextNode = null;
    }
    this.head = previousNode;

    return this.head;
  }

  /**
   * @Title {Reserve linked list using recursion}
   * 
   */
  recursiveReserve(head) {
    if (head === null || head.next === null) return head;

    let reservedHead = this.recursiveReserve(head.next);

    head.next.next = head;
    head.next = null;

    return reservedHead;
  }

}

const dataList = new LinkedList(20);
dataList.append(2);
dataList.append(3);
dataList.append(4);
dataList.append(5);

console.log(dataList.getNthElement(4));
console.log(dataList.printList());
dataList.reserve();
// dataList.recursiveReserve(dataList.head);
console.log(dataList.printList());