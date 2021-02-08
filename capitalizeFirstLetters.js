module.exports = (string) => {
  if (string.length > 0) {
    const testArr = string.split(' ');
    const capitalized = testArr.map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1)
    );
    return capitalized.join(' ');
  }
  return '';
};
