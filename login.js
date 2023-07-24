document.getElementById('login-btn').addEventListener('click',function(){
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    // console.log(email,password);
    const emailvalue = email.value;
    const passwordvalue = password.value;
    //console.log(emailvalue, passwordvalue);


    if(emailvalue=='admin@gmail.com' && passwordvalue== 'admin'){
        console.log("you are the real user");
        window.location.href = 'dashboard.html' ;
    }
    else{
        console.log("you are false");
        alert('you are a hacker');

    }

})