// Write a JavaScript function to check whether an input is an array or not.

    console.log(is_array('w3resource'));  // Output: false
    console.log(is_array([1, 2, 4, 0]));  // Output: true

// Write a JavaScript function to clone an array

    // spread operator

    function clone_array(arr) {
        return [...arr];
    }

    // slice() method

    function clone_array(arr) {
        return arr.slice();
    }

    const originalArray = [1, 2, 3, 4];
    const clonedArray = clone_array(originalArray);

    console.log(clonedArray);  // Output: [1, 2, 3, 4]

    // To verify that it's a true clone and not a reference
    clonedArray.push(5);
    console.log(originalArray); // Output: [1, 2, 3, 4]
    console.log(clonedArray);   // Output: [1, 2, 3, 4, 5]


    /* Conclusion, you can use both spread and slice to achieve the same result.
    For a deep clone you'll need to use JSON.parse(JSON.stringify(arr)) or
    a recursive function. */

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

function last(arr, n = 1) {
    if (n === 1) {
        return arr[arr.length - 1];
    } else {
        return arr.slice(-n);
    }
}
