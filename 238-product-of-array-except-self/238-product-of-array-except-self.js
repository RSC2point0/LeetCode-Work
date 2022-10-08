/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
 /*
 I: arr
 O: output arr
 C: mr than one 0 return arr of 0s
 declare result arr
 declare left arr : fill with product of each num to left of curr
 declare right arr: fill with product of each num to right of curr
 mult each num at like indx of right and left array by each other and put in result arr
 return result array
 
 */
    
    const left = [];
    const right = [];
    const result = [];
    left[0] = 1;
    
    right[nums.length - 1] = 1;
    
    for(let i = 1; i < nums.length; i++){
        //populate left arr w prods of nums to left of input arr and left arr
       left[i] = nums[i - 1] * left[i - 1];
    }
    
    for(let i = nums.length - 2; i >= 0; i--){
        //same as left arr starting at end to get right prods
       right[i] = nums[i + 1] * right[i + 1];
    }
    
    //mult each left and right arr val at the indx by each other and use to populate result
    for(let i = 0; i < nums.length; i++ ){
        result[i] = left[i] * right[i];
    }
    
    
    return result; 
};