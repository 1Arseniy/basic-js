const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const newArr = email.split("@");
  return newArr.length === 3 ? email.split("@")[2] : email.split("@")[1];
}
module.exports = {
  getEmailDomain,
};
