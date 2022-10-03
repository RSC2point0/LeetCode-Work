/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    /*
    declare a sum variable
    create a key that attrib a value to each roman numeral
    iterate the string 
        add or subtract from the total val based on the left or righ position of the roman num
    
    */
    //input: roman numeral str
    //output: number
    let result = 0;
    const numeralVals = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000 
    };
    
    for(let i = 0; i < s.length; i++){
        if(numeralVals[s[i]] < numeralVals[s[i+1]]){
            console.log(numeralVals[s[i]])
            result -= numeralVals[s[i]];
        } else if(numeralVals[s[i]] > numeralVals[s[i+1]]){
            result += numeralVals[s[i]];
        }else{
            result += numeralVals[s[i]]
        }
    }
    
    return result;
    
};