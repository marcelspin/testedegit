
import { registrar } from './autenticador.js'

const form = document.querySelector('#form-cadastro')
const aviso = document.querySelector('#aviso')
//registrar o usuario ao enviar o formulario

form.addEventListener('submit', (evento) => {
    evento.preventDefault() //impede o recarregamento da página

const usuario = {
    email: document.querySelector('#email').value,
    senha: document.querySelector('#senha').value
}

try{
    registrar(usuario)
    alert('Cadastro realizado com sucesso!')
    window.location.href = 'login.html'

}catch(erro){
    aviso.textContent = erro.message 

}

})