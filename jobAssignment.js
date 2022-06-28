// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


const index = (target) => {
    const  nums = [2,7,11,15];
    
         for (let i = 0; i < nums.length; i++) {
              const element = nums[i];
              for (let m = 0; m < nums.length; m++) {
                const anotherIndex = nums[m];
                const indexNumber = element + anotherIndex;
                    if (indexNumber == target) {
                        const arrayIndex = [nums.indexOf(element), nums.indexOf(anotherIndex)] 
                        return arrayIndex;
                    }    
              }
                           
         }
        
    }
    
    index(9);

    const  nums = [2,7,11,15];

    const findingIndexByMap = () =>{ 
        nums.map( index => {
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            const anotherNumber = index + element;
            if (anotherNumber == 9) {
                const arrayIndex = [nums.indexOf(index), nums.indexOf(element)];
                return arrayIndex;
            }
        }
    })
}