let a = document.getElementsByClassName('modal1')
let b = document.getElementsByClassName('modal2')
let rl = document.getElementById('register-link')
let r2 = document.getElementById('login-link')
let r3 = document.getElementById('loginbtn')


// b.addEventListener('click', ()=> {
//     b.add('active');
//     a.remove('active');
    
// });

rl.addEventListener('click' , function() {
  $('#exampleModal').attr("style", "display:none");
});

r2.addEventListener('click' , function() {    
    $('#exampleModal2').attr("style", "display:none");
  });
r3.addEventListener('onclick', function(){
  $('#exampleModal').attr("style", "display:none");
});






 