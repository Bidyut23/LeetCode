* @param {string} s
 * @return {boolean}
 */
var isValid = function(s){
    let stack = [];
    for(let i=0; i< s.length; i++){
        let top = stack[stack.length -1]
        if(s[i] == "(" ||s[i]== "["){
        stack.push(s[i])
        }
        if (s[i] == ")" &&  top == "(" || s[i] == "}" &&  top == "{" || s[i]== "]"&&  top == "["){
                stack.pop()

        }else return false
    }
    if(stack.length == 0){
        return true
    }
    if(stack.length !=0){
        return false
    }
<<<<<<< HEAD
=======

   
>>>>>>> 410fba5d17c4a0e3a34b8d591f2260798827850e
};
