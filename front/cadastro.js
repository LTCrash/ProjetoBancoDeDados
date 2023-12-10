let time = new Date()
//importa os inputs por id
let emini = document.getElementById('emini')
let pasini = document.getElementById('pasini')
let nomeini = document.getElementById('nomeini')
let sobrenomeini = document.getElementById('sobrenomeini')
let imagemini = document.getElementById('imagemini')
let link = document.getElementById('link')
let loginimg = document.getElementById('loginimg')
//importa os botões por id
let abrirform = document.getElementById('abrirform')
let enviarform = document.getElementById('enviarform')
//importa os imagens por id
let carta = document.getElementById('cartaid')
let cadeado = document.getElementById('cadeadoid')
let busto = document.getElementById('bustoid')
let busto2 = document.getElementById('bustoid2')
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
});

//Muda a outline do formulario quando esta no foco
emini.addEventListener('focus', () => {
    emini.style.borderColor = cormedia
    carta.style.borderColor = cormedia
})
pasini.addEventListener('focus', () => {
    pasini.style.borderColor = cormedia
    cadeado.style.borderColor = cormedia
})
nomeini.addEventListener('focus', () => {
    nomeini.style.borderColor = cormedia
    busto.style.borderColor = cormedia
})
sobrenomeini.addEventListener('focus', () => {
    sobrenomeini.style.borderColor = cormedia
    busto2.style.borderColor = cormedia
})
imagemini.addEventListener('focus', () => {
    imagemini.style.borderColor = cormedia
})

//retorna a outline do formulario quando sai do foco
emini.addEventListener('blur', async () => {
    if (emini.value == "") { // volta os botões para como estavam no inicio
        emini.style.borderColor = corbordas // todos os styles estão comentados no staly.css
        carta.style.borderColor = corbordas
        emerro.style.display = 'none'
        emerro2.style.display = 'none'
        return
    } else if (!EmailValido(emini.value)) { // valida o email para mudar a cor da caixa
        emini.style.borderColor = corerro
        carta.style.borderColor = corerro
        emerro.style.display = 'block'
        emerro2.style.display = 'none'
        return
    } else {
        if(emini.value != "dog@gmail.com"){
            emini.style.borderColor = corcerto
            carta.style.borderColor = corcerto
            emerro.style.display = 'none'
            emerro2.style.display = 'none'
        }
        else { //caso esteja ele deixa as cores padroes e o botão de entrar
            emini.style.borderColor = corerro
            carta.style.borderColor = corerro
            emerro.style.display = 'none'
            emerro2.style.display = 'block'
        return
        }
    }
})

pasini.addEventListener('blur', () => { //blur da senha #vai ser alterado
    if (pasini.value == "") {
        pasini.style.borderColor = corbordas
        cadeado.style.borderColor = corbordas
        senerro.style.display = 'none'
        return
    } else if (!tmvalido(pasini.value, 8, 250)) { // verifica se a senha é invalida para emitir um aviso 
        pasini.style.borderColor = corerro
        cadeado.style.borderColor = corerro
        senerro.style.display = 'block'
        return
    } else if (tmvalido(pasini.value, 8, 250)) {
        pasini.style.borderColor = corcerto
        cadeado.style.borderColor = corcerto
        senerro.style.display = 'none'
        return
    } else {
        pasini.style.borderColor = corbordas
        cadeado.style.borderColor = corbordas
        senerro.style.display = 'none'
    }
})

nomeini.addEventListener('blur', () => {
    if (nomeini.value == '') {
        nomeini.style.borderColor = corbordas
        busto.style.borderColor = corbordas
        nomeerro(nomeini.value, sobrenomeini.value)
        return
    } else if (!tmvalido(nomeini.value, 2, 50)) {
        nomeini.style.borderColor = corerro
        busto.style.borderColor = corerro
        nomeerro(nomeini.value, sobrenomeini.value)
        return
    } else {
        nomeini.style.borderColor = corcerto
        busto.style.borderColor = corcerto
        nomeerro(nomeini.value, sobrenomeini.value)
        return
    }
})

function nomeerro(nome, sobrenome){
    if ((nome == "" || tmvalido(nome, 2, 50)) && 
        (sobrenome == "" || tmvalido(sobrenome, 2, 50))){
        nomerro.style.display = 'none'
        return
    } else {
        nomerro.style.display = 'block'
        return
    }
}

sobrenomeini.addEventListener('blur', () => {
    if (sobrenomeini.value == '') {
        sobrenomeini.style.borderColor = corbordas
        busto2.style.borderColor = corbordas
        nomeerro(nomeini.value, sobrenomeini.value)
        return
    } else if (!tmvalido(sobrenomeini.value, 2, 50)) {
        sobrenomeini.style.borderColor = corerro
        busto2.style.borderColor = corerro
        nomeerro(nomeini.value, sobrenomeini.value)
        return
    } else {
        sobrenomeini.style.borderColor = corcerto
        busto2.style.borderColor = corcerto
        nomeerro(nomeini.value, sobrenomeini.value)
        return
    }
})
imagemini.addEventListener('blur', () => {
    imagemini.style.borderColor = corbordas
    if (imagemini.value == ""){
        link.href = "https://i.imgur.com/9LDfN2H.png"
        loginimg.src = "https://i.imgur.com/9LDfN2H.png"
        imagemini.style.borderColor = corbordas
        imgerro.style.display = 'none'
    } else {
        link.href = imagemini.value;
        loginimg.src = imagemini.value;
        loginimg.onerror = function() {
            link.href = "https://i.imgur.com/9LDfN2H.png"
            loginimg.src = "https://i.imgur.com/9LDfN2H.png"; // Atribui uma imagem padrão em caso de erro
            imgerro.style.display = 'block'
            imagemini.style.borderColor = corerro
            return
        }
        imagemini.style.borderColor = corcerto
        imgerro.style.display = 'none'
    }
})

const formlogin = document.getElementById('logini');

abrirform.addEventListener('click', async () => {
    cont = true
    if (!tmvalido(pasini.value, 8, 250)) { // verifica se a senha é invalida para emitir um aviso 
        pasini.style.borderColor = corerro
        cadeado.style.borderColor = corerro
        senerro.style.display = 'block'
        cont = false
    }
    if (!EmailValido(emini.value)) {
        emini.style.borderColor = corerro
        carta.style.borderColor = corerro
        emerro.style.display = 'block'
        cont = false
    }
    if (!tmvalido(nomeini.value, 2, 50)) {
        nomeini.style.borderColor = corerro
        busto.style.borderColor = corerro
        nomeerro(nomeini.value, sobrenomeini.value)
        cont = false
    }
    if (!tmvalido(sobrenomeini.value, 2, 50)) {
        sobrenomeini.style.borderColor = corerro
        busto2.style.borderColor = corerro
        nomeerro(nomeini.value, sobrenomeini.value)
        cont = false
    }
    if (cont) {
        let novoUsuario = adicionacontas(nomeini.value, sobrenomeini.value, emini.value, pasini.value, imagemini.value)
        if (novoUsuario == false){
            emini.style.borderColor = corerro
            carta.style.borderColor = corerro
            emerro2.style.display = 'block'
        } else if(novoUsuario == null){
            emini.style.borderColor = corerro
            carta.style.borderColor = corerro
            emerro.style.display = 'block'
            alert("Verifique o formulario")
        } else {
            let dicionarioJSON = JSON.stringify(usuarios)
            localStorage.setItem("usuarios", dicionarioJSON)
            alert("Cadastrado com sucesso!")
            window.location.href = 'login.html'
        }
    } else {
        alert("Verifique o formulario")
    }
})

//Envia alerta de erro no fomulario
formlogin.addEventListener("submit", async (event) => {
    event.preventDefault()
    window.location.href = 'login.html' //Redireciona para a pagina feed
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