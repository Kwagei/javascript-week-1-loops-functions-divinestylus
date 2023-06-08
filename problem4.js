function findPalindrome(word) {
    word = word.toLowerCase();
  let newWord = '';
  for (let i = word.length-1; i >= 0; i--) {
      newWord += word[i];
  }
  if (newWord === word) {
      console.log(`A palindrome`);
  } else {
      console.log(`Not a palindrome`);
  }
}

findPalindrome('Level');