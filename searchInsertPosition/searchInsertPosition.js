// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
//     You may assume no duplicates in the array.
//
//     Example 1:
//
// Input: [1,3,5,6], 5
// Output: 2
// Example 2:
//
// Input: [1,3,5,6], 2
// Output: 1


var ex1 = [1,3,5,6];
var t1 = 0;
//expected (index of) : 2



var searchInsert = function(nums, target) {
    // if target is in the array
    for(var i = nums.length-1; i >= 0; i--){
        if(nums[i] === target ){
            return i
        }
    }
    //if target is the largest num
    if(target > nums[nums.length-1]){
        return nums.length
    }

    //any number that is not the largest or target
    for(var j = 0; j<nums.length; j++){
        if(target > nums[j]){
            i++;
        }else{
            return j
        }
    }
};


console.log(searchInsert(ex1, t1))