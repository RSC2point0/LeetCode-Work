/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    /*
    declare i that will begin at the n+1 position of the nums1 arr
    decalre j which will repr index of curr nums2 arr
    iterate thr nums1 assigning vals to each new indx until we reach 
    total length of both array1 and array 2
    */
    if(n === 0) return nums1;
    let i = m;
    let j = 0;
    while( i < m + n){
      nums1[i] = nums2[j];
        i++;
        j++;
    }
    nums1.sort((a,b) => a-b);
};