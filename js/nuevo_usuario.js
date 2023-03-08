//Boton de iniciar sesion
var btn_log = document.getElementById("login-btn");

//boton de Registrarse
var btn_acept = document.getElementById("btn-acept");

//Div para mostrar el mensaje de error
var msg_error = document.getElementById("msg-error");

//expresion regular para validar el mail
var exprR = /^((\w)+(\.?\w+)*(\-?\w+)*)@{1}\w{4,255}\.{1}\w+(\.{1}\w+)?/g

//campo del mail
var mail = document.getElementById("mail");
//input nombre
var name_u = document.getElementById("name");
//input usuario
var user = document.getElementById("user");
//input contraseña
var password1 = document.getElementById("password1");
//input confirmar contraseña
var password2 = document.getElementById("password2");

//funcion sdel boton de iniciar sesion para regresar a la pantalla de login
btn_log.addEventListener("click", (e)=>{
    window.open("../index.html");
    window.close();
});

//funcion para validar los datos del formulario
btn_acept.addEventListener("click", (e)=>{
    //Validamos que haya un nombre
    if(name_u.value != ''){
        //validamos que haya un usuario
        if(user.value != '' && user.value.charAt(0) == '@'){
            if(mail.value != '' && exprR.test(mail.value)){
                 //validamos que el campo de contraseña no este vacio
                if(password1.value != ''){
                    //validamos que el campo de confirmar contraseña no este vacio
                    if(password2.value != ''){
                        //validando que las dos contraseñas sean igual
                        if(password1.value == password2.value){ 
                            datos = {
                                nombre : name_u.value,
                                usuario : user.value,
                                correo : mail.value,
                                contra : password1.value
                            }
                            msg_error.innerHTML = `Su registro ha sido exitoso. ${user.value}`;
                            mail.value = '';
                            name_u.value = '';
                            user.value = '';
                            password1.value = '';
                            password2.value = '';
                        }
                        else{
                            msg_error.innerHTML = "Las contraseñas no coinciden.";
                            password2.classList.add("error-input");
                            password1.classList.add("error-input");
                        }
                    }
                    else{
                        msg_error.innerHTML = "Ingrese la contraseña nuevamente.";
                        password2.classList.add("error-input");
                    }
                }
                else{
                    msg_error.innerHTML = "Ingrese una contraseña.";
                    password1.classList.add("error-input");
                }
            }
            else{
                //si el correo no es valido
                msg_error.innerHTML = "Ingrese un correo electronico valido.";
                mail.classList.add("error-input");
            }
           
        }
        else{
            //si no ha ingresado un @usuario le mostramos el error
            msg_error.innerHTML = "Ingrese un usuario, comenzando por @.";
            user.classList.add("error-input");
        }
    }
    else{
        //si no ha ingresado un nombre le mostramos el error
        msg_error.innerHTML = "Ingrese un nombre.";
        name_u.classList.add("error-input");
    }

});


