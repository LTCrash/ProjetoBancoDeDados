let time = new Date()
//importa os inputs por id
let emini = document.getElementById('emini')
let pasini = document.getElementById('pasini')
//importa os botões por id
let abrirform = document.getElementById('abrirform')
let enviarform = document.getElementById('enviarform')
//importa os imagens por id
let carta = document.getElementById('cartaid')
let cadeado = document.getElementById('cadeadoid')
let busto = document.getElementById('bustoid')
let martelo = document.getElementById('marteloid')
//cores
let formulario = '#fff'
let corclara=  '#71D5E4'
let cormedia = '#00B6BC'
let corescura = '#29A0B1'
let corbordas = '#ccc'
let corerro = '#a00'
let corcerto = '#0a0'

console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds())

//Visibilidade da senha

let SenhaCheckbox = document.getElementById('checkSen')

SenhaCheckbox.addEventListener('change', function() {
    if (SenhaCheckbox.checked) {
        pasini.type = 'text'
    } else {
        pasini.type = 'password'
    }
})

emini.addEventListener('input', function() {
    this.value = this.value.toLowerCase();
})

//Muda a outline do formulario quando esta no foco
emini.addEventListener('focus', () => {
    emini.style.borderColor = cormedia
    carta.style.borderColor = cormedia
})
pasini.addEventListener('focus', () => {
    pasini.style.borderColor = cormedia
    cadeado.style.borderColor = cormedia
})

//retorna a outline do formulario quando sai do foco
emini.addEventListener('blur', async () => {
    if (emini.value == "" || EmailValido(emini.value)) { // volta os botões para como estavam no inicio
        emini.style.borderColor = corbordas // todos os styles estão comentados no staly.css
        carta.style.borderColor = corbordas
        emerro.style.display = 'none'
        return
    } else {
        emini.style.borderColor = corerro
        carta.style.borderColor = corerro
        emerro.style.display = 'block'
        return
    }
})

pasini.addEventListener('blur', () => { //blur da senha #vai ser alterado
    if (pasini.value == "") {
        pasini.style.borderColor = corbordas
        cadeado.style.borderColor = corbordas
        senerro.style.display = 'none'
        esqueci.style.display = 'none'
        return
    } else if (!tmvalido(pasini.value, 8, 250)) { // verifica se a senha é invalida para emitir um aviso 
        pasini.style.borderColor = corerro
        cadeado.style.borderColor = corerro
        senerro.style.display = 'block'
        esqueci.style.display = 'none'
        return
    } else {
        pasini.style.borderColor = corbordas
        cadeado.style.borderColor = corbordas
        senerro.style.display = 'none'
        esqueci.style.display = 'none'
    }
})

const formlogin = document.getElementById('logini');

//Envia alerta de erro no fomulario
formlogin.addEventListener("submit", async (event) => {
    event.preventDefault()
    if (!EmailValido(emini.value) || emini.value == "") { // verifica se o email é invalido ou esta vazio para emitir um aviso 
        alert("Verifique o formulario")
        emini.style.borderColor = corerro
        carta.style.borderColor = corerro
        emerro.style.display = 'block'
        return
    } else {//verificar a senha, se a senha está certa ou não 
        if (!tmvalido(pasini.value, 8, 250)) { // verifica se a senha é invalida para emitir um aviso
            alert("Verifique o formulario")
            pasini.style.borderColor = corerro
            cadeado.style.borderColor = corerro
            senerro.style.display = 'block'
            return
        } 
        let login = veficacontas(emini.value,pasini.value)
        if (login == false) { //se a senha estiver errada, aparece no front imagens de erro 
            pasini.style.borderColor = corerro
            cadeado.style.borderColor = corerro
            esqueci.style.display = 'block'
            esqueci2.style.display = 'block'
            return
        } else if (login == null) {
            emerro.style.display = 'block'
            return
        } else {
            emerro.style.display = 'none'
            esqueci.style.display = 'none'
            esqueci2.style.display = 'none'
            let usertk = JSON.stringify(login)
            localStorage.setItem("token", usertk)
            window.location.href = 'inicial.html'
            return
        }
    }
})

abrirform.addEventListener('click', async () => {
    window.location.href = 'cadastro.html'
})

//Valida o email
function EmailValido(email) {
    const rejeitar = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/ //formata o email
    )
    if(rejeitar.test(email)) { // testa o emais de acordo com a formatação
        if(email.length <= 250) {
            return true
        }
    }
    return false
}

//Valida Senha
function tmvalido(value, minimo, maximo) { // valida a senha de acordo com o tamanho
    if (value.length >= minimo && value.length <= maximo) {
        return true
    }
    return false
}