/**
 * @Title {Deleting a node of linked list}
 * @Solution
 * 1. store / get head
 * 2. make var count = 0
 * 3. iterate until count < position
 */
function deleteNode(head, position) {
    // Write your code here
    if (position < 0) return;

    else if (position === 0) {
        head = head.next;
    }

    let count = 1;
    let previousNode = head;

    while (count < position) {
        previousNode = previousNode.next;
        count++;
    }

    previousNode.next = previousNode.next;

    return head;
}