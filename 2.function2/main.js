// ## requirement 
    
// - Create a new main.js file and write a function that does the following: determine whether a string is a palindrome string. (Palindrome, a string read from the beginning as well as from the end. For example, abcba is a palindrome string.)

// ```
// function palindrome(message){
//   // wirte your code here
// }
// palindrome('hello'); // should return false
// palindrome('abcba'); // should return true
// ```

// 方法一 (回文字符串发过来和原字符串一样)
function palindrome1(message){
    var newMessage = message.split('').reverse().join('')
    if(newMessage === message){
        return true
    }else{
        return false
    }
}
console.log(palindrome1('hello'))
console.log(palindrome1('abcba'))


// 方法二 （开始和末尾开始逐个比较判断）
function palindrome2(message){
    var len = message.length;
    var flag = true
    for(var i=0; i<len;i++){
        if(message.charAt(i)!=message.charAt(len-1-i)){
            return false
        }
    }
    return flag; 
}
console.log(palindrome2('hello'))
console.log(palindrome2('abcba'))
