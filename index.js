var insertedText=document.getElementById("email").value;
const complexEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let errorIcon=document.getElementById("error-icon");
let errorMessage=document.getElementById("error-message");

var button=document.getElementById("button-press");
button.addEventListener("click", function() {  
      let mail=document.getElementById("email").value;
      if (complexEmailRegex.test(mail)==false){
          errorIcon.style.display="block";
          errorMessage.style.display="block";
          return false;
         

    
      }else{errorIcon.style.display="none";
      errorMessage.style.display="none";};
      return true;
});
