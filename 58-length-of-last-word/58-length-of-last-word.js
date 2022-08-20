/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length;
    s = s.split(" ").reverse();
    let forECount = 0;
    
    s.forEach(el => {
      if(el !== "" && forECount < 1){
        length = el.length;
        forECount++
      } 
    })
  return length;
};