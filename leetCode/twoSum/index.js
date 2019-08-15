
var twoSum = function(nums, target) {
  let result = {
    indexA: "",
    indexB: ""
  };

  for (var i = 0; i < myNums.length; i++) {
    for (var j = 0; j < myNums.length; j++) {
      if (j == i) {
        continue;
      } else if (myNums[i] + myNums[j] === myTarget) {
        result.indexA = i;
        result.indexB = j;
      }
    }
  }

  return [result.indexA, result.indexB];
};

console.log(twoSum(myNums, myTarget));

let myNums = [3, 2, 4];
let myTarget = 6;
//A Solution from another user from the replies
const twoSumA = function(nums, target) {
  const comp = {
    3: 0,
    4: 1
  };

  for (let i = 0; i < nums.length; i++) {
    //   nums[i] =2
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }

    comp[target - nums[i]] = i;
  }
};

console.log(twoSumA(myNums, myTarget));
