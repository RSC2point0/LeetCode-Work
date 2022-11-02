/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //if s length is odd return false
    //if first el is closed, return false
    //create a cache w open and closed parens
    //init an array
    //iterate thr string
        //put each open el in arr
        // //if the last el in arr/open parens as key has val of its closing parens 
    //remove that el from arr
    //if arr is empty return true if not, return false
    // if(s.length % 2 !== 0) return false;
    // if(s[0] === ')' || ']' || '}') return false;
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