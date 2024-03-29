// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
//     The order of elements can be changed. It doesn't matter what you leave beyond the new length.
//
// Example 1:
//
// Given nums = [3,2,2,3], val = 3,
//
//     Your function should return length = 2, with the first two elements of nums being 2.
//
// It doesn't matter what you leave beyond the returned length.
// Example 2:
//
// Given nums = [0,1,2,2,3,0,4,2], val = 2,
//
//     Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
//
// Note that the order of those five elements can be arbitrary.
//
//     It doesn't matter what values are set beyond the returned length.


let ex1 = [0,1,2,2,3,0,4,2], val1 = 2;


// var removeElement = function(nums, val) {
//
//     //will have to loop backwards since splice() will
//     // skip an index and also change the length of the array when looping forwards.
//
//     for(var i = nums.length-1 ; i>=0; i--){
//         if(nums[i] === val){
//             // console.log(i, 'index');
//             nums.splice(i,1)
//         }
//
//     }
//     // console.log(nums.length)
//     return nums.length
// };
//
// removeElement(ex1, val1 );


//FASTER SOLUTION: Two Pointers

var removeElement = function(nums, val) {
    var slowPointer = 0;

    for(var currentPointer = 0; currentPointer<nums.length; currentPointer++ ){

        if(nums[currentPointer] !== val){  //if current pointer does not match an instance if val inside the nums array...

            nums[slowPointer] = nums[currentPointer]; // increment both indexes at the same time
            slowPointer++;// move to the next element in nums array
        }

        //if done correctly, the value of var slowPointer should reflect the number of times that an element in the nums
        //array was NOT EQUAL to the target.
    }

    return slowPointer
};

removeElement(ex1, val1 );


