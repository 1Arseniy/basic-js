const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr.reduce((acc, el, index) => {
    if (el === -1) {
      acc.push(index);
    }
    return acc;
  }, []);
  const newArr2 = arr.filter((el) => el !== -1).sort((a, b) => a - b);
  newArr.map((el) => newArr2.splice(el, 0, -1));
  return newArr2;
  // remove line with error and write your code here
}
module.exports = {
  sortByHeight,
};
