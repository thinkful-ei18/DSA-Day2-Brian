// const Memory = require('./memory'); 

// var memory = new Memory();

// class Array {
//     constructor() {
//         this.length = 0;
//         this._capacity = 0;
//         this.ptr = memory.allocate(this.length);
//     }

//     push(value) {
//         if (this.length >= this._capacity) {
//             this._resize((this.length + 1) * Array.SIZE_RATIO);
//         }

//         memory.set(this.ptr + this.length, value);
//         this.length++;
//     }

//     _resize(size) {
//         const oldPtr = this.ptr;
//         this.ptr = memory.allocate(size);
//         if (this.ptr === null) {
//             throw new Error('Out of memory');
//         }
//         memory.copy(this.ptr, oldPtr, this.length);
//         memory.free(oldPtr);
//         this._capacity = size;
//     }
//     pop() {
//         if (this.length == 0) {
//             throw new Error('Index error');
//         }
//         const value = memory.get(this.ptr + this.length - 1);
//         this.length--;
//         return value;
//     }
//     get(index) {
//         if (index < 0 || index >= this.length) {
//             throw new Error('Index error');
//         }
//         return memory.get(this.ptr + index);
//     }
// }
// Array.SIZE_RATIO = 3;

// function main(){

//     Array.SIZE_RATIO = 3;

//     //create an instance of the array class
//     let arr = new Array();

//     //add an item to the array
//   arr.push('tauhida')
// console.log(arr.get(0))
    


// // console.log(arr.get(0))
//     console.log(arr);
//     console.log(arr[0])
// }


// main();

// function add(a, b) {
//     return a+b;
// }

// console.log(add(8,9))

// function urlify(str) {
//     return str.replace(/ /g, '%20');
// }

// urlify('hello world');

// function filter(arr) {
//     let newArray = []
//     for (i=0; i < arr.length; i++) {
//         if (arr[i] > 5) {
//             console.log(`i is: ${i}`)
//             newArray.push(arr[i])
//         }
//     }
//     console.log(newArray);
// }

// filter([5, 7, 3, 5, 6, 9]);

// function mergeSort(arr1, arr2) {
//   const merged = arr1.concat(arr2);
//   merged.sort(function(a, b) {return(a-b)})
//   console.log(merged);
// }

// mergeSort([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

// function noVowels(string) {
//     return string.replace(/[aeiou]/ig,'');
// }

// console.log(noVowels('Battle of the Vowels: Hawaii vs. Grozny'))


//end of main code//
// function findMaxAverage(nums) {

// 	let curr_max = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		curr_max += nums[i];
// 	}

// 	let max_so_far = curr_max;

// 	for (let j = k; j < nums.length; j++) {
// 		curr_max += (nums[j] - nums[j - k]);
// 		max_so_far = Math.max(curr_max, max_so_far);
// 	}
// 	return max_so_far / k;
// }

// function main(numbers) {
//     let result = new Array(numbers.length);
    
//     let before = 1;
//     for (let i = 0; i < numbers.length; ++i) {
//       result[i] = before;
//       before *= numbers[i];
//     }
  
//     let after = 1;
//     for (let i = numbers.length - 1; i >= 0; --i) {
//       result[i] *= after;
//       after *= numbers[i];
//     }
    
//     return result;
//   }

//   console.log(main([1, 3, 9, 4]));

//   function twoDimension(arr) {
//   const zeroRows = [];
//   const zeroCols = [];

//   for (let i=0; i<arr.length; i++) {
//       var row = arr[i];
//       for (var j=0; j<row.length; j++) {
//           const item = row[j];
//           if (item === 0) {
//               zeroRows[i] = true;
//               zeroCols[j] = true;
//           }
//       }
//   }
// }
