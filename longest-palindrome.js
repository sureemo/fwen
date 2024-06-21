function longestPalindrome(s) {
  // Remove spaces and convert to lower case
  let cleanedStrings = s.replace(/\s+/g, '').toLowerCase();

  if (cleanedStrings.length < 2) {
    return s;
  }

  let startPosition = 0;
  let maxLength = 1;

  const getPalindromeFromCenter = (leftPosition, rightPosition) => {
    while (
      leftPosition >= 0
      && rightPosition < cleanedStrings.length
      && cleanedStrings[leftPosition] === cleanedStrings[rightPosition]
    ) {
      leftPosition--;
      rightPosition++;
    }

    return rightPosition - leftPosition - 1;
  }

  for (let i = 0; i < cleanedStrings.length; i++) {
    // Get odd length palindrome
    const oldLengthPalindrome = getPalindromeFromCenter(i, i);
    // Get even length palindrome
    const evenLengthPalindrome = getPalindromeFromCenter(i, i + 1);

    const palindromeLength = Math.max(oldLengthPalindrome, evenLengthPalindrome);

    // if palindrome length is greater that current maxLength value, replace the new max length
    // and update startPosition
    if (palindromeLength > maxLength) {
      maxLength = palindromeLength;
      startPosition = i - Math.floor((palindromeLength - 1) / 2);
    }
  }

  // Reconstruct the result from the original string with spaces
  let originalStart = 0;
  let originalEnd = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      continue;
    }

    if (count === startPosition) {
      originalStart = i;
    }

    if (count === startPosition + maxLength - 1) {
      originalEnd = i;
      break;
    }

    count++;
  }

  return s.substring(originalStart, originalEnd + 1);
}



// Example usage:

const input = "I ibought a Toyota";

const result = longestPalindrome(input);

console.log(result);  // Expected output should be "a Toyota”
