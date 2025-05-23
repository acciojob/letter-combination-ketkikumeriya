function letterCombinations(input_digit) {
  //Complete the function
	  if (!input_digit || input_digit.length === 0) return [];

  const digitToChar = {
    '0': '0',
    '1': '1',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const result = [];

  function backtrack(index, path) {
    if (index === input_digit.length) {
      result.push(path);
      return;
    }

    const letters = digitToChar[input_digit[index]];
    for (let char of letters) {
      backtrack(index + 1, path + char);
    }
  }

  backtrack(0, "");

  // Sort the result lexicographically
  return result.sort();

}

module.exports = letterCombinations;
