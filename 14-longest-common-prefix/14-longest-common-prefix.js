/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for(let i = 0; i < strs[0].length; i++){
        for(let word of strs){
            if(strs[0][i] !== word[i]){
                return strs[0].slice(0,i)
            }
        }
    }
    return strs[0];
};