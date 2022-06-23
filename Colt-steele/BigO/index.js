// time complexity -> amount of time needs to complete
// space complexity -> amount of memory uses
// worst case -> omegatheta,O
/**
 * Big O notation
 * O(n)
 */
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i); // O (n) operations
    }
}

/**
 * Big O notation
 * O(n^2)
 */
function logItems2(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j); // O (n^2) operations
        }
    }
}

/**
 * Big O notation
 * O(n^2 -> example 2)
 */
function logItems3(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i, j, k); // O (n^2) operations
            }
        }
    }
}

/**
 * Terms for inputs
 * O (a+b)
 */
function logItems4(a, b) {
    // O (a+b)
    for (let i = 0; i < a; i++) {
        console.log(i);
    }

    for (let j = 0; j < b; j++) {
        console.log(j);
    }

    // O (a*b)
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            console.log(i, j);
        }
    }
}

// drop non-dominants
function logItems5(n) {
    // O (n^2)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
    // O (n)
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }

    // O (n^2) + O(n) -> O (n^2(dominant)+n(non-dominant)) -> O (n^2) -> dropping non-dominant

}

// O(1)
function addItems(n) {
    // return n + n; // O(1) -> referred to as constant time
    return n + n + n; // O (2) -> O(1) -> will be referred as O (1)
}

// O(log n)
// 1 2 3 4 5 7 8 -> divide and conquer
// 1234 5678 (divided into 2 array)
// 1234 -> not in  second array
// 12 34 (divided)
// 12 -> not in second array
// 1 2 (divided)
// 1 -> found (was not in second array)
// 3 operations(cut / divided) needed 2^3 = 8
// log2 8 = 3

// O (n log n -> in some sorting algorithm)

// Big O of Arrays
// [0->11,1->33,2->23,3->7]
// push,pop -> O(1)
// shift(remove first item)/unshift(add at first) -> O (n) -> as needs re indexing
// splice (1,0,'Hi') -> O(n)
// find -> search by value -> O(n), search by index-> O(1)

// Big O of objects
// insertion - O(1)
// remove - O(1)
// search - O(n)
// access - O(1)