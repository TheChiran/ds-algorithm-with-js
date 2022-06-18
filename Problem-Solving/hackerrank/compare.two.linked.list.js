function CompareLists(llist1, llist2) {
    let array1 = [],
        array2 = [];
    let currentHead1 = llist1,
        currentHead2 = llist2;
    while (currentHead1) {
        array1.push(currentHead1.data);
        currentHead1 = currentHead1.next;
    }
    while (currentHead2) {
        array2.push(currentHead2.data);
        currentHead2 = currentHead2.next;
    }

    return JSON.stringify(array1) === JSON.stringify(array2) && array1.length === array2.length ? 1 : 0;
}