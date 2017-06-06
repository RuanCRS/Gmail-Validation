
var R_Email = require('./val/Email');

function Email(P_Email){
  this.Email = new R_Email(P_Email);

 this.Email.Email_Slice_Gmail();

}

function MSG_ERROR(P_MessageError){
console.log(P_MessageError);

};

module.exports.Gmail = Email;
module.exports.MSG_ERROR = MSG_ERROR;

