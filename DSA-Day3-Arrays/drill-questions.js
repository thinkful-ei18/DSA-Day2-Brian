/* 1. what is the length, capacity, and memory address of the array
        {Length: 1 - Capacity: 3 ptr: 0}
        
    2.What is the length, capacity and memory address of your array? 
    Explain the result of your program after adding the new lines of code
       Array { length: 6, _capacity: 12, ptr: 3 }
       The length changed each time I used push() the capacity changed to 12 once 
       my length became 4 (4*3 = 12) the pointer changed to the new address once my
       array 
    3.What is the length, capacity and memory address of your array? 
       Array { length: 5, _capacity: 12, ptr: 3 }
       the length goes down one (from the end) but nothing else needs to change
    4. Print the first item in the array arr.
        the answer is 3 because I only pushed 3's into my array
        
    5.Empty the array and add just one item arr.push("tauhida");
    Done
    6. Print this one item that you just added. What is the result? 
    Can you explain your result?
    Result is NAN. This is because our memory is trying to convert the strin into a number
    because it is not able to do so it will be "NAN"
    7. What is the purpose of the _resize() function in your Array class?
    Because the array is one contiguous block of memory and the space after what I
    have allocated is probably going to be already in use and not available. The _resize
    makes a new bigger space of memory so I can copy existing values from old to new.
    */

    /*Interview Questions
1.  URLify a String
    // function urlify(str) {
    //     return str.replace(/ /g, '%20');
    // }

    // urlify('hello world');
This is O(n) because the more ' ' you have the more times it needs to replace it
with %20.

2. Max Sum in the Array
    function filter(arr) {
    let newArray = []
    for (i=0; i < arr.length; i++) {
        if (arr[i] > 5) {
            console.log(`i is: ${i}`)
            newArray.push(arr[i])
        }
    }
    console.log(newArray);
    }

    filter([5, 7, 3, 5, 6, 9]);

    This is O(n) because the number of operations will increase in direct proportion to
    the size of the input.

3. Merge Arrays
    function mergeSort(arr1, arr2) {
    const merged = arr1.concat(arr2);
    merged.sort(function(a, b) {return(a-b)})
    console.log(merged);
    }

    mergeSort([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

    This is O(n) because of the sorting which will have an increased number
    of operations directly proportional to the input size.

4. No Vowels
    function noVowels(string) {
    return string.replace(/[aeiou]/ig,'');
    }

    console.log(noVowels('Battle of the Vowels: Hawaii vs. Grozny'))
    This is O(n) because the number of operations (removing the vowel) is as close
    to a 1:1 ratio as you can get.

5.Products
    function main(numbers) {
    let result = new Array(numbers.length);
    
    let before = 1;
    for (let i = 0; i < numbers.length; ++i) {
      result[i] = before;
      before *= numbers[i];
    }
  
    let after = 1;
    for (let i = numbers.length - 1; i >= 0; --i) {
      result[i] *= after;
      after *= numbers[i];
    }
    
    return result;
  }

  console.log(main([1, 2, 3, 4]));



    */