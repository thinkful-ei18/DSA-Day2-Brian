// const swap = (array, i, j) => {
//     const tmp = array[i];
//     array[i] = array[j];
//     array[j] = tmp;
// };

// const partition = (array, start, end) => {
//     const pivot = array[end - 1];
//     let j = start;
//     for (let i=start; i<end - 1; i++) {
//         if (array[i] <= pivot) {
//             swap(array, i, j);
//             j++;
//         }
//     }
//     swap(array, end-1, j);
//     return j;
// };

// function qSort(array, start, end) {
//     start = array[0];
//     end = array.length;
//     if (start >= end) {
//         return array;
//     }
//     const middle = partition(array, start, end);
//     array = qSort(array, start, middle);
//     array = qSort(array, middle + 1, end);
//     return array;
// };




// function merge(left, right, array) {
//     let leftIndex = 0;
//     let rightIndex = 0;
//     let outputIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             array[outputIndex++] = left[leftIndex++];
//         }
//         else {
//             array[outputIndex++] = right[rightIndex++];
//         }
//     }

//     for (let i=leftIndex; i<left.length; i++) {
//         array[outputIndex++] = left[i];
//     }

//     for (let i=rightIndex; i<right.length; i++) {
//         array[outputIndex++] = right[i];
//     }
//     return array;
// };

// function mergeSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }

//     const middle = Math.floor(array.length / 2);
//     let left = array.slice(0, middle);
//     let right = array.slice(middle, array.length);

//     left = mergeSort(left);
//     right = mergeSort(right);
//     return merge(left, right, array);
// };

// console.log(mergeSort([89, 30, 25, 32, 72, 70]));
// function insertionSort(array) {
//     const length = array.length;
    
//     for(let i = 1; i < length; i++) {
//       let temp = array[i];
//       for(let j = i - 1; j >= 0 && array[j] > temp; j--) {
//         array[j+1] = array[j];
//       }
//       array[j+1] = temp;
//     }
    
//     return array;
//   }
  
//   function bucketSort(array, bucketSize) {
//     if (array.length === 0) {
//       return array;
//     };
  
//     let i,
//         minValue = array[0],
//         maxValue = array[0],
    
//     // Setting min and max values
//     array.forEach(function (currentVal) {
//         if (currentVal < minValue) {
//             minValue = currentVal;
//         } else if (currentVal > maxValue) {
//             maxValue = currentVal;
//         }
//     })
  
//     // Initializing buckets
//     let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
//     let allBuckets = new Array(bucketCount);
    
//     for (i = 0; i < allBuckets.length; i++) {
//       allBuckets[i] = [];
//     }
    
//     // Pushing values to buckets
//     array.forEach(function (currentVal) {
//         allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
//     });
  
//     // Sorting buckets
//     array.length = 0;
    
//     allBuckets.forEach(function(bucket) {
//         insertionSort(bucket);
//         bucket.forEach(function (element) {
//             array.push(element)
//         });
//     });
  
//     return array;
//   }

//   console.log(bucketSort([5, 7, 8, 2, 33, 77], 4));
  
// bucketSort
function insertionSort(array) {
    var length = array.length;
    
    for(var i = 1; i < length; i++) {
      var temp = array[i];
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
  }

function bucketSort(list, bucketCount) {
    // only for numbers
    var min = Math.min.apply(Math,list),  // get the min
        buckets = [],
        bucket_count = bucketCount || 200
  
    // build the bucket and distribute the elements in the list
    for(var i = 0;i<list.length;i++){
      // this is a simple hash function that will make sure the basic rule of bucket sort
      var newIndex = Math.floor( (list[i] - min) / bucket_count );  
  
      buckets[newIndex] = buckets[newIndex] || []
      buckets[newIndex].push(list[i])
    }
    // refill the elements into the list
    var idx = 0
    for(i = 0;i<buckets.length;i++){
      if(typeof buckets[i] !== "undefined"){
        // select those non-empty buckets
        insertionSort(buckets[i]);  // use any sorting algorithm would be fine
        // sort the elements in the bucket
        for(var j = 0;j<buckets[i].length;j++){
          list[idx++] = buckets[i][j]
        }
      }
    }
    return list
  }

  console.log(bucketSort([9, 54, 22, 33, 44, 55, 666, 12, 18], null));