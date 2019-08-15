// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
//     Example 1:
//
// Given nums = [1,1,2],
//
//     Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
//
//     It doesn't matter what you leave beyond the returned length.


//solution.) Use a pointer / counter


let ex = [ 1, 1, 2];
//         i
//         j

var removeDuplicates = function(nums) {

    let dups = [];

    for(var i = 0; i<nums.length; i++){
        //on last iteration , it will be undefined since there is n+1 === undefined .
        //if that last value is undefined , we'll set it 0 .
        //however, when that last value gets evaluated in an if check (the 0) , 0 returns falsey. This is why last ternary sets it to true
        if(nums[i+1] != undefined ? nums[i] != nums[i+1] : nums[i] === 0 ? true : nums[i]){
            dups.push(nums[i])
        }

    }

    //empty the original array
    nums.length = 0;

    //run through the dups array and fill original array with dups content
    for(var d=0; d<dups.length; d++){
        nums[d] = dups[d]
    }

    return nums.length
};

console.log(removeDuplicates(ex));