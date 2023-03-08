//pagina de restablecer contraseña
//input del correo
var input_dt = document.getElementById("email-r");
//boton de aceptar
var btn_acp = document.getElementById("btn-env");
//div para mensajes
var msg = document.getElementById("msg");
//expr para validar el correo
var exprR = /^((\w)+(\.?\w+)*(\-?\w+)*)@{1}\w{4,255}\.{1}\w+(\.{1}\w+)?/g;
//boton de iniciar sesion
var btn_log = document.getElementById("login-btn");


btn_acp.addEventListener("click", (e)=>{
    if(input_dt.value != ''){
        if(exprR.test(input_dt.value)){
            msg.innerHTML = "Se te enviará un correo con los pasos para restablecer tu contraseña.";
            input_dt.value = '';
        }
        else{
            msg.innerHTML = "Ingresa un correo valido.";
        }
    }
    else{
        msg.innerHTML = "Ingresa tu correo para continuar.";
    }
});

btn_log.addEventListener("click", (e)=>{
    window.open("../index.html");
    window.close();
});