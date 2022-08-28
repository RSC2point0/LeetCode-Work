var findDuplicate = function(nums) {
  //create a new object which will hold a key:value
  //loop through the array
  //count the amount of value of the key
  //if it's  more than 0...return the key. 
  const frequency = {};
  
  for(const num of nums){
    // if (!frequency[num]) {
    if (String(num) in frequency === false) {
      frequency[num] = 1;
    }else{
      console.log(frequency)
      return num;
    }
  }
};