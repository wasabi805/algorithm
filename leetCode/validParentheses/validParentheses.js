// https://medium.com/@paulrohan/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911
let string = `({})({}){}[]`;

var isValid = function(s) {
  let stack = [];
  let key = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  console.log('hello');

  for(var i=0; i<s.length; i++){
      if(s[i] === '(' || s[i] === "[" || s[i] === "{"){
          stack.push(s[i])
      }else{
          console.log(stack);
          let last = stack.pop();

          if(s[i] !== key[last]){
              console.log('FAILED');
              return false
          }
      }
  }

  if(stack.length !==0){
      console.log('failed at the end');
      return false
  }

  console.log('PASSED');
  return true

};

isValid(string);
