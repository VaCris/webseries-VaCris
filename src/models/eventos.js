document.addEventListener("DOMContentLoaded", () => {
    const btnSignIn = document.getElementById("sign-in");
    const btnSignUp = document.getElementById("sign-up");
    const fromRegister = document.querySelector(".register");
    const fromLogin = document.querySelector(".login");

    const handleSignIn = () => {
        fromRegister.classList.add("hide");
        fromLogin.classList.remove("hide");
    };

    const handleSignUp = () => {
        fromLogin.classList.add("hide");
        fromRegister.classList.remove("hide");
    };
    
    btnSignIn.addEventListener("click", handleSignIn);
    btnSignUp.addEventListener("click", handleSignUp);
});


/*function google() {
    var ancho = 400;
    var alto = 450;
    var left = (screen.width / 2) - (ancho / 2);
    var top = (screen.height / 2) - (alto / 2);
    var ventana = window.open('https://accounts.google.com',
     '', `top=${top},left=${left},width=${ancho},height=${alto}`);
}
function facebook() {
    var ancho = 400;
    var alto = 450;
    var left = (screen.width / 2) - (ancho / 2);
    var top = (screen.height / 2) - (alto / 2);
    var ventana = window.open('https://es-la.facebook.com/login','', `top=${top},left=${left},width=${ancho},height=${alto}`);
}
function twitter() {
    var ancho = 400;
    var alto = 450;
    var left = (screen.width / 2) - (ancho / 2);
    var top = (screen.height / 2) - (alto / 2);
    var ventana = window.open('https://twitter.com/i/flow/login','', `top=${top},left=${left},width=${ancho},height=${alto}`);
}*/
