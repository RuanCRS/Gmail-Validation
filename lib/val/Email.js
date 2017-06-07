
function Info_Email(P_Email) {

  this.Email = {


        Email_Name : P_Email,
        Email_Typeof: typeof P_Email,
        Email_Length: P_Email.length,
        Email_Standard_Gmail: `@gmail.com`,

  };
};

Info_Email.prototype.Email_Gmail = function() {

  var Write_Gmail = this.Email.Email_Name;
  var Write_Gmail_Slice = Write_Gmail.slice(this.Email.Email_Length - 10, this.Email.Email_Length);

      console.log(this.Email.Email_Standard_Gmail);

      if(Write_Gmail_Slice === this.Email.Email_Standard_Gmail){
        console.log("Insert Gmail - OK");
        this.Email_toUpperCase();
      }else{
        console.log("Insert Gmail - NOT-OK");
      }

};


Info_Email.prototype.Email_toUpperCase = function(){

  for(var i=0; i< this.Email.Email_Length - 10; i++){

      if(this.Email.Email_Name[i] === this.Email.Email_Name[i].toUpperCase()){

          if(this.Email.Email_Name[i] === '.' || this.Email.Email_Name[i] === '_'){
            console.log("Next UpperCase");
          }else {
            console.log("ERROR: toUpperCase ==> "+this.Email.Email_Name[i]);
            break;
          }

      }else {
        console.log("Next UpperCase");
      }


  }

}


module.exports = Info_Email;
