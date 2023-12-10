let link = document.getElementById("link")
let userimg = document.getElementById("userimg")
let nome = document.getElementById("nome")
let sair = document.getElementById("sair")
let login = document.getElementById("login")
let registrar = document.getElementById("registrar")

let usertk = localStorage.getItem("token")
let userlg = JSON.parse(usertk)

function display(){
    if (userlg == null) {
        registrar.style.display = "inline"
        login.style.display = "inline"
        link.style.display = "none"
        nome.style.display = "none"
        sair.style.display = "none"
    } else {
        registrar.style.display = "none"
        login.style.display = "none"
        link.href = userlg.urlimg
        userimg.src = userlg.urlimg
        nome.textContent = userlg.nome + " " + userlg.sobrenome
        link.style.display = "inline"
        nome.style.display = "inline"
        sair.style.display = "inline"
    }
}

display()

sair.addEventListener('click', async () => {
    localStorage.removeItem("token")
    window.location.reload()
})

login.addEventListener('click', async () => {
    window.location.href = 'login.html'
})

registrar.addEventListener('click', async () => {
    window.location.href = 'cadastro.html'
})