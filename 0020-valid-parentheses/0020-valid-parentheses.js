/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //create a cache w open and closed parens
    //init an array
    //iterate thr string
        //put each open el in arr
        // should start with open parens so if curr el is a prop on cache, push into arr
        //if val of obj w key of last el in the arr is not eql to curr closed parens            return false
    const arr = [];
    const parensCache = {
                         '(':')',
                         '{':'}',
                         '[':']'
                        }
    for(let parens of s){
        if(parensCache.hasOwnProperty(parens)){
           arr.push(parens);
          }else if (parens === ')' || '}' || ']'){
            if(parensCache[arr.pop()] !== parens){
               return false;
               };
        }
    }
    return arr.length === 0;
        
};