let link = document.getElementById("link")
let userimg = document.getElementById("userimg")
let nome = document.getElementById("nome")

let produtos = document.getElementById("produtos")

let editadd = document.getElementById("editadd")
let edtitulo = document.getElementById("edtitulo")
let eddescricao = document.getElementById("eddescricao")
let edpor = document.getElementById("edpor")
let edaquisicao = document.getElementById("edaquisicao")
let edestado = document.getElementById("edestado")
let edlocalizacao = document.getElementById("edlocalizacao")
let edid = document.getElementById("edid")
let edcategoria = document.getElementById("edcategoria")
let edimagem = document.getElementById("edimagem")
let idisbn = document.getElementById("idisbn")
let edlink = document.getElementById("edlink")
let edimg = document.getElementById("edimg")

let Bsair = document.getElementById("sair")
let Blogin = document.getElementById("login")
let Bregistrar = document.getElementById("registrar")

let Badicionar = document.getElementById("Adicionar")
let Bcancelar = document.getElementById("cancelar")
let Beditar = document.getElementById("editar")
let Benviar = document.getElementById("enviar")


let usertk = localStorage.getItem("token")
let userlg = JSON.parse(usertk)

function display(){
    if (userlg == null) {
        Bregistrar.style.display = "inline"
        Blogin.style.display = "inline"
        link.style.display = "none"
        nome.style.display = "none"
        Bsair.style.display = "none"
        Badicionar.style.display = "none"
    } else {
        Bregistrar.style.display = "none"
        Blogin.style.display = "none"
        link.href = userlg.urlimg
        userimg.src = userlg.urlimg
        nome.textContent = userlg.nome + " " + userlg.sobrenome
        link.style.display = "inline"
        nome.style.display = "inline"
        Bsair.style.display = "inline"
        if (userlg.funcao == 1 ){
            Badicionar.style.display = "inline"
        } else {
            Badicionar.style.display = "none"
        }
    }
}

display()

Bsair.addEventListener('click', async () => {
    localStorage.removeItem("token")
    window.location.reload()
})

Blogin.addEventListener('click', async () => {
    window.location.href = 'login.html'
})

Bregistrar.addEventListener('click', async () => {
    window.location.href = 'cadastro.html'
})

Badicionar.addEventListener('click', async () => {
    editadd.style.display = 'block'
    edid.style.display = 'inline'
    edtitulo.value = ''
    eddescricao.value = ''
    edpor.value = ''
    edaquisicao.value = ''
    edestado.value = ''
    edlocalizacao.value = ''
    edid.value = ''//"https://i.imgur.com/9LDfN2H.png"
    edcategoria.value = ''
    edimagem.value = ''
    edlink.href = "https://th.bing.com/th/id/OIG.CJg7teFlanaPZovirVB.?pid=ImgGn"
    edimg.src = "https://th.bing.com/th/id/OIG.CJg7teFlanaPZovirVB.?pid=ImgGn"
    idisbn.style.display = 'none'
    Beditar.style.display = 'none'
    Benviar.style.display = 'inline'
})

Bcancelar.addEventListener('click', async () => {
    editadd.style.display = 'none'
})

function criarElementoProduto(id, imagem, titulo, descricao, aut, aquisicao, estado, local, categoria) {
    // Cria os elementos
    var divProduto = document.createElement('div')

    var divDados0 = document.createElement('div')
    var linkProduto = document.createElement('a')
    var imgProduto = document.createElement('img')

    var divUtil = document.createElement('div')
    var divInfos = document.createElement('div')
    var divTexto = document.createElement('div')

    var pTitulo = document.createElement('p')
    var pDescricao = document.createElement('p')

    var divBotoes = document.createElement('div')

    var divDados1 = document.createElement('div')

    var pDetalhe1 = document.createElement('p')
    var pDetalhe2 = document.createElement('p')
    var pDetalhe3 = document.createElement('p')
    var pDetalhe4 = document.createElement('p')
    var pDetalhe5 = document.createElement('p')
    var pCategoria = document.createElement('p')

    // Define as propriedades dos elementos
    divProduto.id = id
    divProduto.className = 'produto'

    divDados0.className = 'dados0'
    linkProduto.className = 'linkproduto'
    linkProduto.href = imagem
    linkProduto.target = '_blank'
    imgProduto.className = 'imgproduto'
    imgProduto.src = imagem

    divUtil.className = 'util'
    divInfos.className = 'infos'

    pTitulo.className = 'titulo'
    pTitulo.textContent = titulo

    pDescricao.className = 'descricao'
    pDescricao.textContent = descricao

    divBotoes.className = 'botoes'
    
    divDados1.className = 'dados1'
    pDetalhe1.className = 'detalhe'
    pDetalhe1.textContent = 'Por: ' + aut

    pDetalhe2.className = 'detalhe'
    pDetalhe2.textContent = 'Aquisição: ' + aquisicao

    pDetalhe3.className = 'detalhe'
    pDetalhe3.textContent = 'Estado: ' + estado

    pDetalhe4.className = 'detalhe'
    pDetalhe4.textContent = 'Localização: ' + local

    pDetalhe5.className = 'detalhe'
    pDetalhe5.textContent = 'Id/ISBN: ' + id
    
    pCategoria.className = 'categoria'
    pCategoria.textContent = 'Categoria: ' + categoria

    // Anexa os elementos
    divTexto.appendChild(pTitulo)
    divTexto.appendChild(pDescricao)
    divInfos.appendChild(divTexto)

    divUtil.appendChild(divInfos)

    if(userlg){
        var inputSolicitar = document.createElement('input')
        var inputDevolver = document.createElement('input')

        inputSolicitar.className = 'botao'
        inputSolicitar.type = 'button'
        inputSolicitar.name = 'acao'
        inputSolicitar.value = 'Solicitar'
        inputSolicitar.id = id
        inputSolicitar.setAttribute("onclick", "solicitar(this.id)")

        inputDevolver.className = 'botaodv'
        inputDevolver.type = 'button'
        inputDevolver.name = 'acao'
        inputDevolver.value = 'Devolver'
        inputDevolver.id = id
        inputDevolver.setAttribute("onclick", "devolver(this.id)")

        divBotoes.appendChild(inputSolicitar)
        divBotoes.appendChild(inputDevolver)

        if (userlg.funcao) {
            var inputEditar = document.createElement('input')
            var inputExcluir = document.createElement('input')

            inputEditar.className = 'botaoed'
            inputEditar.type = 'button'
            inputEditar.name = 'acao'
            inputEditar.value = 'Editar'
            inputEditar.id = id
            inputEditar.setAttribute("onclick", "editar(this.id)")

            inputExcluir.className = 'botaoex'
            inputExcluir.type = 'button'
            inputExcluir.name = 'acao'
            inputExcluir.value = 'Excluir'
            inputExcluir.id = id
            inputExcluir.setAttribute("onclick", "excluir(this.id)")

            divBotoes.appendChild(inputEditar)
            divBotoes.appendChild(inputExcluir)
        }
        divUtil.appendChild(divBotoes)
    }

    linkProduto.appendChild(imgProduto)
    divDados0.appendChild(linkProduto)
    divDados0.appendChild(divUtil)
    divDados1.appendChild(pDetalhe1)
    divDados1.appendChild(pDetalhe2)
    divDados1.appendChild(pDetalhe3)
    divDados1.appendChild(pDetalhe4)
    divDados1.appendChild(pDetalhe5)
    divDados1.appendChild(pCategoria)
    divProduto.appendChild(divDados0)
    divProduto.appendChild(divDados1)

    // Anexa o elemento produto ao corpo do documento
    produtos.appendChild(divProduto)
}
function solicitar() {

}

function devolver() {

}


Beditar.addEventListener('click', async () => {
    if (edpor.value && eddescricao.value && edcategoria.value && edaquisicao.value && edestado.value && edlocalizacao.value && edtitulo.value && edimagem.value) {
        let resposta = confirm("Você tem certeza?")
        if (resposta) {
            if (editarLivro(edid.value, edpor.value, eddescricao.value, edcategoria.value, edaquisicao.value, edestado.value, edlocalizacao.value, edtitulo.value, edimagem.value) ) {
                alert('Editado com sucesso')
                window.location.reload()
            } else {
                alert('Esse objeto não esta no banco de dados ou ouve algum erro com o servidor')
            }
        }
    } else {
        alert('Verifique o fumulario')
    }
})

Benviar.addEventListener('click', async () => {
    if (!isNaN(edid.value) && edpor.value && eddescricao.value && edcategoria.value && edaquisicao.value && edestado.value && edlocalizacao.value && edtitulo.value && edimagem.value) {
        let resposta = confirm("Você tem certeza?")
        if (resposta) {
            if (adicionaLivro(edid.value, edpor.value, eddescricao.value, edcategoria.value, edaquisicao.value, edestado.value, edlocalizacao.value, edtitulo.value, edimagem.value) ) {
                alert('Adicionado com sucesso')
                window.location.reload()
            } else {
                alert('Esse objeto ja esta no banco de dados')
            }
        }
    } else {
        alert('Verifique o fumulario')
    }
})



edimagem.addEventListener('blur', () => {
    if (edimagem.value == ""){
        edlink.href = "https://th.bing.com/th/id/OIG.CJg7teFlanaPZovirVB.?pid=ImgGn"
        edimg.src = "https://th.bing.com/th/id/OIG.CJg7teFlanaPZovirVB.?pid=ImgGn"
        imgerro.style.display = 'none'
    } else { 
        edlink.href = edimagem.value;
        edimg.src = edimagem.value;
        edimg.onerror = function() {
            edlink.href = "https://th.bing.com/th/id/OIG.CJg7teFlanaPZovirVB.?pid=ImgGn"
            edimg.src = "https://th.bing.com/th/id/OIG.CJg7teFlanaPZovirVB.?pid=ImgGn"; // Atribui uma imagem padrão em caso de erro
            imgerro.style.display = 'inline'
            return
        }
        imgerro.style.display = 'none'
    }
})

function editar(id) {
    editadd.style.display = 'block'
    edid.value = id
    edid.style.display = 'none'
    idisbn.innerText = 'Id/ISBN: ' + id
    idisbn.style.display = 'block'
    Beditar.style.display = 'inline'
    Benviar.style.display = 'none'
    let livr = getLivro(id)
    edtitulo.value = livr.titulo
    eddescricao.value = livr.descricao
    edpor.value = livr.por
    edaquisicao.value = livr.dataaquisicao
    edestado.value = livr.estado
    edlocalizacao.value = livr.localizacaoFisica
    edcategoria.value = livr.categoria
    edimagem.value = livr.urlimgitem
    edlink.href = livr.urlimgitem
    edimg.src = livr.urlimgitem
}

function excluir(id) {
    let resposta = confirm("Você tem certeza?")
    if (resposta) {
        if (deletalivro(userlg.id, id)) {
            alert('Objeto excluido')
            window.location.reload()
        } else {
            alert('Erro ao excluir')
        }
    }
}

function feed(){
    let listlivros = procuralivros()
    for (lv in listlivros) {
        criarElementoProduto(lv, listlivros[lv].urlimgitem, listlivros[lv].titulo, listlivros[lv].descricao, listlivros[lv].por, listlivros[lv].dataaquisicao,
            listlivros[lv].estado, listlivros[lv].localizacaoFisica, listlivros[lv].categoria)
    }
}
// Chama a função para criar o elemento produto
feed()