
var R_Email = require('./val/Email');

console.log("gmail-validation");

function Email(P_Email){
  this.Email = new R_Email(P_Email);
  this.Email.Email_Gmail();
}


module.exports.Gmail = Email;
