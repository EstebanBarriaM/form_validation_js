window.addEventListener('load', ()=> {

    const form = document.getElementById('formulario');
    const usuario = document.getElementById('usuario');
    const email = document.getElementById('formulario');
    const password = document.getElementById('formulario');
    const passwordConfirmacion = document.getElementById('formulario');

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        validaCampos();
    });

    const validaCampos = ()=> {
        //Capturar valores ingresados por el usuario
        const usuarioValor = usuario.value.trim();
        const emailValor = email.value.trim();
        const passwordValor = password.value.trim();
        const passwordConfirmacionValor = passwordConfirmacion.value.trim();
    };

});