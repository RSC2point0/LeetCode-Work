/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //if strings are not the same size return false
    //iterate thr s
        //if first letter in t is in s shift from t
    //if t is empty str, return true otherwise, false
    if(s.length !== t.length) return false;
    let tCopy = t.slice();
    let sCopy = s.slice();
    let i = 0; 
     sCopy = s.split('');
       
    for(let i = 0; i < s.length; i++){
       if(tCopy.includes(s[i])){
           let findIndx = tCopy.indexOf(s[i])
           tCopy = tCopy.replace(tCopy[findIndx],"");
           // console.log(tCopy)
       }
    }
    return tCopy.length === 0;
};