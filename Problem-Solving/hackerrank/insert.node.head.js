// 1->2->3->4->5
class SinglyLinkedListNode {

}

function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data);
    let previousHead = head;
    head = newNode;
    head.next = previousHead;
    return head;
}