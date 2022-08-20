/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    //loop thr till x
    //multiply each num by itself from 1 -> x, 
    //condition checks if value is greater than or less than x 
    //once you exit while you hit your target so you can return multiplier
    
    let j = 0;
    
    while(j * j <= x){
        //take each i and keep mult by itself until we reach or exceed x
        j++;

    }
    return j - 1;
};