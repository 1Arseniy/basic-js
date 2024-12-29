const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (
    !members ||
    typeof members === "number" ||
    Object.prototype.toString.call(members) === "[object Object]"
  ) {
    return false;
  }
  const newFirstArr = members.filter((el) => typeof el === "string");
  const newSecondArr = newFirstArr.map((el) =>
    String(el)
      .split(" ")
      .filter((el) => (el ? el : false))
  );
  const firstWord = newSecondArr.map((el) => el[0]);
  const toUppercase = firstWord.map((el) => el[0].toUpperCase());
  return toUppercase.sort().join("");
  // remove line with error and write your code here
}
module.exports = {
  createDreamTeam,
};
