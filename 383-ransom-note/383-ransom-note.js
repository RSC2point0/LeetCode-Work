/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 
var canConstruct = function(ransomNote, magazine) {
    /*
    -put mag leters in arr with s method
    - iterate thr RN, check magazine arr for curr letter
    -remove the letter from maga
    -if we find a letter in RN not in magazine retn false
    -if we get to end of RN return true
    */
    
    let magArray = magazine.split("");
    let newRansomNote = ransomNote.split("");

  for(const letter of magArray){
    const ransomIndx = newRansomNote.indexOf(letter);
    if(ransomIndx > -1){
        newRansomNote.splice(ransomIndx,1);
    }
  }

  return newRansomNote.length ? false : true
}