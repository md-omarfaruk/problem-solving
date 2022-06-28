// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


const index = () => {
    const  nums = [2,7,11,15];
    
         for (let i = 0; i < nums.length; i++) {
              const element = nums[i];
              for (let m = 0; m < nums.length; m++) {
                const anotherIndex = nums[m];
                const indexNumber = element + anotherIndex;
                    if (indexNumber == 9) {
                        const arrayIndex = [nums.indexOf(element), nums.indexOf(anotherIndex)] 
                        return arrayIndex;
                    }    
              }
                           
         }
        
    }
    
    index();