//localStorage.removeItem("livros")
let usuariosGetJSON = localStorage.getItem("usuarios")
let usuarios = JSON.parse(usuariosGetJSON)
if (!usuarios) {
    usuarios = {
        "1" : {nome: "Doguinho", sobrenome: "Da Silva", login: "dog@gmail.com", password: "12345678", urlimg: "https://i.imgur.com/xtoLyW2.jpeg", funcao : 1}
    }
    let usuariosJSON = JSON.stringify(usuarios)
    localStorage.setItem("usuarios", usuariosJSON)
} console.log(usuarios)

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let livrosGetJSON = localStorage.getItem("livros")
let livros = JSON.parse(livrosGetJSON)
if (!livros) {
    livros = {
        8538083724 : {por: "Lewis Carrol (Autor)", descricao: "Alice no País das Maravilhas foi publicado em 1965 e é um clássico da literatura nonsense. Além da história da menina entediada que persegue um coelho branco, há várias passagens no livro que abordam física, filosofia e lógica. A continuação dessa história aparece em outra obra do autor, Alice através do espelho.",
        categoria: "Literatura/Ficção", dataaquisicao: "9 outubro 2019", estado: "Novo", localizacaoFisica: "2B", titulo: "Alice no país das maravilhas - Edição padrão",  urlimgitem: "https://m.media-amazon.com/images/I/81eAcV387dL._SL1500_.jpg"},
        8538091352 : {por: "L. Frank Baum (Autor)", descricao: "Munchkins, Quadlings e pessoas de porcelana são alguns dos moradores desse lugar incrível para onde a pequena Dorothy foi enviada por um ciclone com seu cãozinho Totó. Agora, ela precisa seguir pela estrada de tijolos amarelos até chegar à Cidade de Esmeraldas. Lá vive o poderoso Mágico de Oz, que pode ser capaz de ajudá-la a voltar para casa. E nessa jornada ela encontrará amigos, perigos e muitas aventuras.",
        categoria: "Literatura/Ficção", dataaquisicao: "22 agosto 2020", estado: "Novo", localizacaoFisica: "2B", titulo: "O maravilhoso mágico de OZ Capa comum - Versão integral",  urlimgitem: "https://m.media-amazon.com/images/I/610oj93P09L._SL1000_.jpg"}
    }
    let livrosJSON = JSON.stringify(livros)
    localStorage.setItem("livros", livrosJSON)
} console.log(livros)

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//itemId, , , , , , ,  e  https://m.media-amazon.com/images/I/51VL1FwwaFL._SY445_SX342_.jpg



function veficacontas(login, senha){
    for (user in usuarios){
        if (usuarios[user].login == login) {
            if (usuarios[user].password == senha){
                return {id: user, nome: usuarios[user].nome, sobrenome: usuarios[user].sobrenome, urlimg: usuarios[user].urlimg, funcao: usuarios[user].funcao}
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
    return true
}

function procuralivros(){
    let listalivros = {}
    for ( lv in livros){
        listalivros[lv] = {por: lv.por, descricao: lv.descricao, categoria: lv.categoria, dataaquisicao: lv.dataaquisicao,
             estado: lv.estado, localizacaoFisica: lv.localizacaoFisica, titulo: lv.titulo,  urlimgitem: lv.urlimg}
    }
    return listalivros
}