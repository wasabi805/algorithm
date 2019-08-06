// 14. Longest Common Prefix
// Easy
//
// 1497
//
// 1402
//
// Favorite
//
// Share
// Write a function to find the longest common prefix string amongst an array of strings.
//
//     If there is no common prefix, return an empty string "".
//
//     Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//     Note:
//
// All given inputs are in lowercase letters a-z.

let ex = ["SQLInjection", "SQLDatabase", "SQL"];

var longestCommonPrefix = function(strs) {
  let prefix = "";
  if (strs.length === 0) {
    return prefix;
  }
  //loop through all chars and get the indexes
  // checks against the first string in the array

  alert(strs[0].length);

  for (var i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    //loop through individual chars in string
    for (var j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) return prefix;
    }

    prefix = prefix + char;
  }
  console.log(prefix);
  return prefix;
};

console.log(longestCommonPrefix(ex));
