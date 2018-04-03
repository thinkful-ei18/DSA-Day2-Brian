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
//The reason this is linear time is because it has the potential to take as long 

