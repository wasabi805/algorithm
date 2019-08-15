// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51  // reverseInt(981) === 189 //   reverseInt(500) === 5 //   reverseInt(-15) === -51
//   reverseInt(-90) === -9
function reverseInt(n) {
    (typeof n === 'number' ) ?  true : alert('Please enter a valid number')

    let neg="";
    let result="";
    let endPopZero = false;
    let num = n.toString().split('').reverse();

    //value to iterate nums array : will help check if 0 is not at the end of number getting passed in
    let incr=0;
    let rick = '';
    let whubaluba = '';

    num.forEach((char, i , num)=>{
        //if there's a negative, lets save it for later
        (char === '-')? neg='-': neg="";

        //if the zero is not in the set of last zeros , stop popping them from num
        (num[incr] ==='0' && num[incr-1]!=='0') ?  endPopZero=true : whubaluba='dubdub';

        //if char is part of the set zeros at the end of number that was passed in .
        (num[incr] ==='0' && num[incr-1]==='0' && endPopZero===false) ? num.shift() : rick='rickC137';

        incr=incr+1;// increment count

        result = result+char;// accumulate the split chars
    });
    // last...,add a negative if it existed when the number was passed in
    // && put everything together and turn it back into a number  :)
    console.log(parseInt(neg+result, 10), 'result');
}
reverseInt('butthole');