const bottona = document.getElementById('boton-iniciar');
const user_name = document.getElementById('user_name');
const user_password = document.getElementById('user_password');
const error_msg = document.getElementById('notify-msg');

bottona.addEventListener("click",(e)=>{
    if(user_name.value != '' && user_password.value != '' ){ 
        const respuesta = solicitarDatos(user_name.value, user_password.value);
        respuesta.then((respuesta)=>{
            window.open("../html/inicio.html");
            window.close();
        })
        .catch((e)=>{
            if(e==1){
                error_msg.innerHTML = 'La contraseña es incorrecta.';
                user_password.value = '';
                user_password.classList.add("error-input");
            }
            else{
                error_msg.innerHTML = 'Los datos son incorrectos.'
                user_name.value = '';
                user_name.classList.add("error-input");
                user_password.value = '';
                user_password.classList.add("error-input");
            }
        });
    }
    else{
        if(user_name.value == ''){
            error_msg.innerHTML = 'Ingrese su nombre de usuario.';
        }
        else if(user_password.value == ''){
            error_msg.innerHTML = 'Ingrese su contraseña.';
        }
    }
});

function solicitarDatos(user, password){
    return new Promise((resolve,reject)=>{
        if(user == '@luis'){
            if(password == '1234'){
                setTimeout(()=>{
                    resolve(true);
                },2000);
                
            }
            else{
                reject(1);
            }
        }
        else{
            setTimeout(()=>{
                reject(false);
            },2000);
        }
    });
}
