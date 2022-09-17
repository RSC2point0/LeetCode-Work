/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //left pointer
        //right pointer
        //declare mid variable
        //store currBadVers
        //iterate 1 -> n while left is less than right
        //iterate using mid variable as start point
            //if isBad returns true check left side
                //check if val is less than currBadVers if it is reassign
            //if isBad is false check right to find start
        //return currBadVers
        let left = 1;
        let right = n;
        while(left < right){
            let mid = Math.floor((left + right)/2)
            if(isBadVersion(mid)){
                right = mid;
            }else{
                left = mid + 1;
            }
           
        }
        return right;
    };
};





