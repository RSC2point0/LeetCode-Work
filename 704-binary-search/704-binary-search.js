/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //init a pointer at mid point of arr
    //iterate thr array 
    //check if curr num is eql to target if it is retr index
    //if curr num is greatr than target move left of arry
    //else move right 
    //return -1
    let l = 0;
    let r = nums.length -1;
    
    while(l <= r){
        let pointer = Math.floor((l+r)/2);
        if(nums[pointer] === target) return nums.indexOf(nums[pointer]);
        if(nums[pointer] > target){
            r--;
        }else{
            l++; 
        }
    }
    
    return -1;
};