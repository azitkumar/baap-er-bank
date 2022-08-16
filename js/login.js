document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordlField = document.getElementById('user-password');
    const password =passwordlField.value;

    // Do not use this system for client work   6 number line এ const password = passwordlField.value হবে।


    if(email ==='sontan@baap.com' && password ==='secret'){
        window.location.href='bank.html';
    }
    else{
        alert('Tui beta password vule jais');
    }
})