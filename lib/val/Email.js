
//var bodyParser = require('body-parser');
function Info_Email(P_Email) {

  this.Email = {

        Email_Name : P_Email,
        Email_Typeof: typeof P_Email,
        Email_Length: P_Email.length,
        Email_Social:{
            Gmail: `@gmail.com`,
            Set_Gmail: false
        }
  };
};

Info_Email.prototype.Email_toUpperCase = function(){

  for(var i=0; i< this.Email.Email_Length - 10; i++){
      if(this.Email.Email_Name[i] === this.Email.Email_Name[i].toUpperCase()){
        console.log("ERROR");
}


  }

}

Info_Email.prototype.Email_Slice_Gmail = function() {

  var Write_Gmail = this.Email.Email_Name;
  var Write_Gmail_Slice = Write_Gmail.slice(this.Email.Email_Length - 10, this.Email.Email_Length);

if(Write_Gmail_Slice === this.Email.Email_Social.Gmail){

  this.Email.Email_Social.Set_Gmail = true;
  //console.log(this.Email.Email_Social.Set_Gmail);
  this.Email_toUpperCase();

}else{


  this.Email.Email_Social.Set_Gmail = false;
  console.log(this.Email.Email_Social.Set_Gmail);
}

};

module.exports = Info_Email;
