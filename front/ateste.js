let usuariosGetJSON = localStorage.getItem("usuarios")
let usuarios = JSON.parse(usuariosGetJSON)
if (!usuarios) {
    usuarios = {
        "1" : {nome: "Doguinho", sobrenome: "Da Silva", login: "dog@gmail.com", password: "12345678", urlimg: "https://i.imgur.com/xtoLyW2.jpeg", funcao : 1}
    }
    let usuariosJSON = JSON.stringify(usuarios)
    localStorage.setItem("usuarios", usuariosJSON)
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let livrosGetJSON = localStorage.getItem("livros")
let livros = JSON.parse(livrosGetJSON)
if (!livros) {
    livros = {
        8538083724 : {por: "Lewis Carrol (Autor)", descricao: "Alice no País das Maravilhas foi publicado em 1965 e é um clássico da literatura nonsense. Além da história da menina entediada que persegue um coelho branco, há várias passagens no livro que abordam física, filosofia e lógica. A continuação dessa história aparece em outra obra do autor, Alice através do espelho.",
        categoria: "Literatura/Ficção", dataaquisicao: "9 outubro 2019", estado: "Novo", localizacaoFisica: "2-B", titulo: "Alice no país das maravilhas - Edição padrão",  urlimgitem: "https://m.media-amazon.com/images/I/81eAcV387dL._SL1500_.jpg"},
        8538091352 : {por: "L. Frank Baum (Autor)", descricao: "Munchkins, Quadlings e pessoas de porcelana são alguns dos moradores desse lugar incrível para onde a pequena Dorothy foi enviada por um ciclone com seu cãozinho Totó. Agora, ela precisa seguir pela estrada de tijolos amarelos até chegar à Cidade de Esmeraldas. Lá vive o poderoso Mágico de Oz, que pode ser capaz de ajudá-la a voltar para casa. E nessa jornada ela encontrará amigos, perigos e muitas aventuras.",
        categoria: "Literatura/Ficção", dataaquisicao: "22 agosto 2020", estado: "Novo", localizacaoFisica: "2-B", titulo: "O maravilhoso mágico de OZ Capa comum - Versão integral",  urlimgitem: "https://m.media-amazon.com/images/I/610oj93P09L._SL1000_.jpg"}
    }
    let livrosJSON = JSON.stringify(livros)
    localStorage.setItem("livros", livrosJSON)
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let solicitadosGetJSON = localStorage.getItem("solicitados")
let solicitados = JSON.parse(solicitadosGetJSON)
if (!solicitados) { 
    solicitados = {
        1 : [{livroid: 8538083724, Dataemp: '12/12/2023', datadv: '19/12/2023', stats: 'Em andamento'}]
    }
    let solicitadosJSON = JSON.stringify(solicitados)
    localStorage.setItem("solicitados", solicitadosJSON)
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

function veficacontas(login, senha){
    for (user in usuarios){
        if (usuarios[user].login == login) {
            if (usuarios[user].password == senha){
                return {id: user, nome: usuarios[user].nome, sobrenome: usuarios[user].sobrenome,
                     urlimg: usuarios[user].urlimg, funcao: usuarios[user].funcao}
            } else { 
                return false
            }
        }
    }
    return null
}

function adicionacontas(nome, sobrenome,login,password,urlimg){
    if (login == "" || nome == "" || sobrenome == "" || password == "" ||urlimg == ""){
        return null
    }
    for (user in usuarios){
        if (usuarios[user].login == login) {
            return false
        }
    }
    usuarios[parseInt(user, 10)+1] = {nome: nome, sobrenome: sobrenome, login: login, password: password, urlimg: urlimg , funcao : 0}
    let dicionarioJSON = JSON.stringify(usuarios)
    localStorage.setItem("usuarios", dicionarioJSON)
    return true
}

function getLivro(id) {
    return livros[id]
}

function procuralivros(iduser){
    let listalivros = {}
    let peguei
    let emprest
    for ( lv in livros){
        peguei = false
        emprest = false
        if (iduser) {
            if (iduser in solicitados) {
                for (lvs in solicitados[iduser]) {
                    if (solicitados[iduser][lvs].stats == 'Em andamento' && solicitados[iduser][lvs].livroid == lv) {
                        peguei = true
                    }
                }
            }
            for (sol in solicitados) {
                for (livs in solicitados[sol]) {
                    if (solicitados[sol][livs].stats == 'Em andamento' && solicitados[sol][livs].livroid == lv) {
                        emprest = true
                    }
                }
            }
        }
        
        listalivros[lv] = {por: livros[lv].por, descricao: livros[lv].descricao, categoria: livros[lv].categoria, dataaquisicao: livros[lv].dataaquisicao,
             estado: livros[lv].estado, localizacaoFisica: livros[lv].localizacaoFisica, titulo: livros[lv].titulo,  urlimgitem: livros[lv].urlimgitem, emp: emprest, meu: peguei}
    }
    return listalivros
}

function adicionaLivro(id, por, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem, userid){
    if (id in livros || usuarios[userid].funcao == 0) {
        return false
    } else {
        livros[id] = {por: por, descricao: descricao, categoria: categoria, dataaquisicao: dataaquisicao,
            estado: estado, localizacaoFisica: localizacaoFisica, titulo: titulo,  urlimgitem: urlimgitem}
            livrosJSON = JSON.stringify(livros)
            localStorage.setItem("livros", livrosJSON)
            livrosGetJSON = localStorage.getItem("livros")
            livros = JSON.parse(livrosGetJSON)
            return true
    }
}

function editarLivro(id, por, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem, userid){
    if (!(id in livros || usuarios[userid].funcao == 0)) {
        return false
    } else {
        livros[id] = {por: por, descricao: descricao, categoria: categoria, dataaquisicao: dataaquisicao,
            estado: estado, localizacaoFisica: localizacaoFisica, titulo: titulo,  urlimgitem: urlimgitem}
            livrosJSON = JSON.stringify(livros)
            localStorage.setItem("livros", livrosJSON)
            livrosGetJSON = localStorage.getItem("livros")
            livros = JSON.parse(livrosGetJSON)
            return true
    }
}

function deletalivro(iduser, idlivro) {
    delete livros[idlivro]
    livrosJSON = JSON.stringify(livros)
    localStorage.setItem("livros", livrosJSON)
    livrosGetJSON = localStorage.getItem("livros")
    livros = JSON.parse(livrosGetJSON)
    return true
}

function solicitarLivro(iduser, idlivro, data1, data2) {
    idlivro = parseInt(idlivro)
    if (iduser in solicitados) {
        for (lvs in solicitados[iduser]) {
            if (solicitados[iduser][lvs].stats == 'Em andamento') {
                return false
            }
        }
        solicitados[iduser].unshift({livroid: idlivro, Dataemp: data1, datadv: data2, stats: 'Em andamento'})
        
    } else {
        solicitados[iduser] = [{livroid: idlivro, Dataemp: data1, datadv: data2, stats: 'Em andamento'}]
    }
    solicitadosJSON = JSON.stringify(solicitados)
    localStorage.setItem("solicitados", solicitadosJSON)
    solicitadosGetJSON = localStorage.getItem("solicitados")
    solicitados = JSON.parse(solicitadosGetJSON)
    return true
}

function devolverLivro(iduser, idlivro) {
    idlivro = parseInt(idlivro)
    if (iduser in solicitados) {
        for (lvs in solicitados[iduser]) {
            if (solicitados[iduser][lvs].stats == 'Em andamento' && solicitados[iduser][lvs].livroid == idlivro) {
                solicitados[iduser][lvs].stats = 'Finalizado'
                solicitadosJSON = JSON.stringify(solicitados)
                localStorage.setItem("solicitados", solicitadosJSON)
                solicitadosGetJSON = localStorage.getItem("solicitados")
                solicitados = JSON.parse(solicitadosGetJSON)
                return true 
            }
        }
        return false
    } else {
        return false
    }
}

function livroPego(iduserid) {
    var livropg = {}
    if (iduserid in solicitados) {
        for (lvs in solicitados[iduserid]) {
            if (solicitados[iduserid][lvs].stats == 'Em andamento') {
                if (solicitados[iduserid][lvs].livroid in livros){
                    livropg[solicitados[iduserid][lvs].livroid] = livros[solicitados[iduserid][lvs].livroid]
                } else {
                    livropg[solicitados[iduserid][lvs].livroid] = {titulo: "Devolver...", urlimgitem:"https://th.bing.com/th/id/OIG.CJg7teFlanaPZovirVB.?pid=ImgGn"}
                }
                return livropg
            }
        }
    } return false
}

function pesquisaLivro(iduser, livrotxt) {
    livrotxt = livrotxt.toLowerCase()
    let listalivros = {}
    let peguei
    let emprest
    for ( lv in livros){
        peguei = false
        emprest = false
        if (iduser) {
            if (iduser in solicitados) {
                for (lvs in solicitados[iduser]) {
                    if (solicitados[iduser][lvs].stats == 'Em andamento' && solicitados[iduser][lvs].livroid == lv) {
                        peguei = true
                    }
                }
            }
            for (sol in solicitados) {
                for (livs in solicitados[sol]) {
                    if (solicitados[sol][livs].stats == 'Em andamento' && solicitados[sol][livs].livroid == lv) {
                        emprest = true
                    }
                }
            }
        }
        if ((lv+"").toLowerCase().includes(livrotxt) ||
            livros[lv].por.toLowerCase().includes(livrotxt) ||
            livros[lv].categoria.toLowerCase().includes(livrotxt) ||
            livros[lv].dataaquisicao.toLowerCase().includes(livrotxt) ||
            livros[lv].estado.toLowerCase().includes(livrotxt) ||
            livros[lv].localizacaoFisica.toLowerCase().includes(livrotxt) ||
            livros[lv].titulo.toLowerCase().includes(livrotxt) ||
            (emprest+"").toLowerCase().includes(livrotxt)){

            listalivros[lv] = {
                por: livros[lv].por,
                descricao: livros[lv].descricao,
                categoria: livros[lv].categoria,
                dataaquisicao: livros[lv].dataaquisicao,
                estado: livros[lv].estado,
                localizacaoFisica: livros[lv].localizacaoFisica, 
                titulo: livros[lv].titulo,
                urlimgitem: livros[lv].urlimgitem,
                emp: emprest,
                meu: peguei}
        }
   }
    return listalivros
}