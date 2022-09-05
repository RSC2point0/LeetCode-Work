/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //decl obj
    //place each num in obj as key with val as its indx
    //check if the targ - num is in obj
        //return array with num indx and target - num indx
    const obj = {};
   
    for(let i = 0; i < nums.length; i++){
        if(target - nums[i] in obj ){  
            console.log('inside')
                return [i,nums.indexOf(target - nums[i])];

        }else{
            
            obj[nums[i]] = i;
        }
    }
    
};