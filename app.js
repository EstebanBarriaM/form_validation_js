window.addEventListener('load', () => {

    const form = document.querySelector('#formulario');
    const usuario = document.getElementById('usuario');
    const email = document.getElementById('formulario');
    const password = document.getElementById('formulario');
    const passwordConfirmacion = document.getElementById('formulario');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validaCampos();
    });

    const validaCampos = () => {
        //Capturar valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        //const passwordValor = password.value.trim();
        //const passwordConfirmacionValor = passwordConfirmacion.value.trim();

        //Validando Campo Usuario
        if(!usuarioValor){
            validaError(usuario, 'Campo Vacio');
        }else{
            validaCorrecto(usuario);
        };

        //Validando Campo Email
        if(!emailValor){
            validaError(email, 'Campo Vacio');
        }else{
            validaCorrecto(email);
        };
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

});