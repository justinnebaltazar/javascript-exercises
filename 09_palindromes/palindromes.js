const palindromes = function (str) {
  const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let cleanedString = str
      .toLowerCase()
      .split('')
      .filter((character) => alphanumeric.includes(character))
      .join('');
  
  const reversedString = cleanedString.split('').reverse().join('');
  return reversedString === cleanedString;
};

module.exports = palindromes;