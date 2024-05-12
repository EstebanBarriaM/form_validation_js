window.addEventListener('load', () => {

    const form = document.querySelector('#formulario');
    const usuario = document.getElementById('usuario');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordConfirmacion = document.getElementById('passwordConfirmacion');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validaCampos();
    });

    const validaCampos = () => {
        //Capturar valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const passwordValor = password.value.trim();
        const passwordConfirmacionValor = passwordConfirmacion.value.trim();

        //Validando Campo Usuario
        if(!usuarioValor){
            validaError(usuario, 'Campo Vacio');
        }else{
            validaCorrecto(usuario);
        };

        //Validando Campo Email
        if(!emailValor){
            validaError(email, 'Campo Vacio');
        }else if(!validaEmail(emailValor)){
            validaError(email, 'Correo No Valido');
        }else{
            validaCorrecto(email)
        }
    };

    const validaError = (input, msje) => {
        const formControl = input.parentElement;
        const aviso = formControl.querySelector('p');
        aviso.innerText = msje;
        formControl.className = 'form-control error';
    };

    const validaCorrecto = (input, msje) => {
        const formControl = input.parentElement;
        formControl.className = 'form-control correcto';
    }

    const validaEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

});