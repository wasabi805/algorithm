// Given a 32-bit signed integer, reverse digits of an integer.
//
//     Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21

var reverse = function(x) {
  // let n = ""+x+"";
  let n = "" + x + "";
  let splitStr = n.split("");
  let stillZero = true;
  let newString = "";

  for (var i = splitStr.length - 1; i >= 0; i--) {
    //remove 0

    //similar to while loop
    if (splitStr[i] == 0 && stillZero) {
      continue;
    } else {
      stillZero = false;
    }

    newString += splitStr[i];
  }

  if (newString[newString.length - 1] == "-") {
    newString = "-" + newString.substring(0, newString.length - 1);
  }

  let upperLimit = Math.pow(2, 31) - 1;
  let lowerLimit = Math.pow(-2, 31) - 1;

  if (newString < lowerLimit || newString > upperLimit) {
    return 0;
  }
  return newString;
};

// console.log(Math.pow(2, 31) -1)
console.log(reverse(-6100));
