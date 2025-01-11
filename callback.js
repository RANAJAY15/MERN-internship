function submitForm(submit,isFormValid){
    if(isFormValid){
        console.log("Fields Validated Successfully");
        console.log(submit);
    }
   else{
        console.log("Form Validation Failed");
        console.log("submission Unsuccessful");
   }
}
function formValidation(){
}
Email ="sece@sece.ac.in"
password ="12345678"
if(email==="sece@sece.ac.in"&& password){
    return true
}
else{
return false
}
submitForm("Form Submitted successfully",formValidation)