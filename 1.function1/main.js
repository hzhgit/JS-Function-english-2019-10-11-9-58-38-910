// ## requirement 
    
// - Create a new main. Js file, write a function, implement the following function: a string output in reverse order.

// ```
// function reverseString(message){
//   // wirte your code here
// }
// reverseString('hello'); // should return 'olleh'
// ```

function reverseString(message){
   return message.split('').reverse().join('')
}

var result = reverseString("hello")
console.log(result);
