// step-1 
document.getElementById('btn-submit').addEventListener('click', function(){
  
// step-2 
const emailField=document.getElementById('user-email');
const email=emailField.value ;

// step-3 
const passwordField=document.getElementById('user-password');
const password=passwordField.value ;

// step-4 
if(email==='msetu@gmail.com'&& password==='secret'){
    window.location.href='bank.html';
}
else{
   alert('Please give me correct email and password');
}




})