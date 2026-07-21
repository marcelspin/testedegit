
const CHAVE_USUARIOS = 'usuarios'
const CHAVE_SESSAO = 'usuarioLogado'

function lerUsuarios() {
    const json = localStorage.getItem (CHAVE_USUARIOS)
    return json ? JSON.parse(json) :  []
}

export function registrar(usuario){
    const usuarios = lerUsuarios()

    if (usuarios.some(user => user.email === usuario.email)){
        throw new Error('Já existe este e-mail')       
    }
    usuarios.push(usuario)
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify
    (usuarios))
}
