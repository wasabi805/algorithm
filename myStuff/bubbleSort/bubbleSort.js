console.log('hello world');
// https://www.youtube.com/watch?v=6Gv8vg0kcHc

var input = [14,46,47,-10,86,92,52,48.36,66,85,-2];
console.log(input);

const secondLargest =(arr)=>{
    let isSorted = false;   //initial value starts as false
    let temp = null;        //set

    while(!isSorted){

        isSorted = true; // Assume it is true to break out

        for(var i=0; i<arr.length -1 ; i++){
            if(arr[i] < arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                isSorted = false
            }
        }
    }
   return arr[1]
};

console.log(secondLargest(input), 'second largest')