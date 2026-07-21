const form = document.querySelector('#form-cadastro')
//registrar o usuario ao enviar o formulario
form.addEventListener('submit', (evento) => {
    evento.preventDefault() //impede o recarregamento da página

const usuario = {
    email: document.querySelector('#email').value,
    senha: document.querySelector('#senha').value
}
console.log (usuario)
})