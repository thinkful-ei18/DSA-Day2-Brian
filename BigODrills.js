//Even or Odd
//This is O(1) - Constant Time
//The reason this is O(1) because it is a standard mathematical operation that
//regardless of the size of the operation it will always only perform the one operation
//(checking to see if the number is divisible by 2)

//Are you here?
//This is O(n^2) - Polynomial Time
//The reason this is O(n^2) is because it requires two arrays and must iterate over
//each array at least one time. Therefore, it will always have twice as many operations
//as it does inputs (i.e. array1 and array2 are have three variables each, it will have 6 operations
//but if they have six variables each, it will have 12 operations, and so on).

//Doubler
//This is O(n) - Linear Time
//The reason this is O(n) is because it will have the exact number of operations as it does
//inputs. It doesn't matter if it is given an array with one number or an array with
//1,000,000 numbers it will always have the number of operations equal to the size of the input.

//Naive Search
//This is O(n) - Linear Time
//The reason this is O(n) is because liner time is the worst case for this particular
//function. This function is going to iterate over an array until it finds the number
//that matches the item. It could potentially find the number during the very first operation
//however, because it could potentially be the number of operations equal to the input size,
//it is O(n). Also, because the number of operations will never exceed the input size, it is not any
//of the other classifications.

//Creating Pairs
//This is O(n^2) - Polynomial Time
//The reason this is O(n^2) is because it has a nested for loop. Therefore, it will
//always have twice the number of operations as it does inputs.

//Computing Fiboanccis
//This is O(n) - Linear Time
//The reason this is linear time is because if I input 10, it will have to iterate over the for loop
//10 times. If I input 11, it will go 11 times.

//An efficient search
//O(log(n)) - Logarithmic time
//The reason this is logarithmic time is because, regardless of the size of the input,
//it will always cut it in half. Therefore the number of operations will not grow
//in a linear fashion to the size of the input and will only ever grow logarithmically.

//Random Element
//This is O(1) - Constant time
//The reason this is constant time or O(1) is because it is always only going to do a single
//operation. It does matter the size of the input, it will do one operation and then provide
//the output. Therefore, it is O(1)

//Is it Prime?
//This is O(2) - Linear Time
//The reason this is linear time is because it has the potential to take as long as 
//the input since the input may only be divisible by itself. Therefore, the function
//will iterate 1 to n times.

/////Yesterday's Exercise

//Counting Sheep
//Recursive - this is O(n) linear time because the number of operations is dependant
//on the input - larger input is an equal number of operations.
//Iterable - this is also O(n) linear time for the same reasons - if 3 is the input there
//will be three operations but if six is the input, there will be six operations.
//it is 1:1

//Array Double
//Recursive - this is O(n) because it is being asked to double all of the numbers in the
//array. Therefore, if the number of operations is equal to the number of variables
//in the array.
//Iterable - This is also O(n) because it is going through the array one time but
//has to perform the doubling operation for each item in the array - 17 items in the array
//equates to 17 times the function must double the number. It is 1:1

//Backwards String
//Recursive - This is O(n^2) polynomial time because it takes (approximately) twice as long
//as the number of characters in the string so 'cat' is approximately six operations
//wheras 'tigers' is approximately twelve operations (taking two tines as long).
//Iterable - This is also O(n^2) because it requires two operations per letter.

//Count the triangle
//Recursive - This is polynomial time O(n^2) because it has approxinmately twice as many operations
//as the input size. n=3 is approximately half the number of operations as n=6
//Iterable - This is also O(2^n) because it takes a significant amount more time to process a larger number

//String Splitter
//Recursive - this is O(n) because the number of operations can be, in the worst case, as long as the number
//used as the input.
//Iterable - This is O(n^2) because it takes at least twice as long as the input to complete
//the function.

//Binary Representation
//Recursive - this is O(log(n)) because it does not change in linear time based on the input
//size. Instead, it grows a fraction of the size of the inout.
//Iterable - This is also O(log(n)) because the number of operations do grow but they grow much
//at a fraction of the input size.

//Factorial
//Recursive - this is O(n^2) because it the number of operations increaes approximately ^2 times
//the number of the input - 78 takes 240 operations whilte 39 takes 120
//Iterable - this is also O(n^2) for the exact reasons the recurive version is.

//Fibonacci
//Recursive - this is exponential time O(2^n) because it takes a significantly longer time
//for the function to complete even when the input is only slightly increased.
//Iterable - this is O(n) because unline the recursive version it steadily increases 
//based on an increase in the input. The increase is significant enough to not be O(log(n))

//Anagrams
//This is 

//Animal Hierarchy
//This is O(n) because the number of operations grows in a linear fashion based on the size
//of the input.

