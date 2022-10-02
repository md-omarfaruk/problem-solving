function vowelsAndConsonants(s) {
  let letters = s.split('');
  let consonants = [];
    for (let i = 0; i < letters.length; i++) {
          let vowel = letters[i];
          if(vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u' ){
            console.log(vowel);
          }
          else{
            consonants.push(vowel);
          }
    }
    for (let i = 0; i < consonants.length; i++) {
      let consonant = consonants[i];
      
        console.log(consonant); 
   }
    

};

console.log(vowelsAndConsonants('javascript'));