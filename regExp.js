function regExp(re){
    let makeWordLower = re.toLowerCase();
    let wordLength = makeWordLower.length;
    let firstLetterOfWord = makeWordLower.charAt(0);
    let vowelTest = firstLetterOfWord.test("aeiou");

    return vowelTest;
}
console.log(regExp("abcd"));