
let string = `"({})[]"`;



//1.) Make array to reference each :

let open = ["{", "(", "[",];
let closed = ["}", ")", "]",];


var isValid = function(s) {
    let stack = [];

    let check;


    for(var i=0; i<s.length; i++){
        check = s[i];

        if(check > s[-1]){
            console.log('no ')
        }

        console.log(check)
    }

};


isValid(string);