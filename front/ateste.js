//localStorage.removeItem("livros")
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost", // Mudar depois
    user: "seu_usuario",
    password: "sua_senha",
    database: "nome_do_banco_de_dados"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Conectado!");
});

// let usuariosGetJSON = localStorage.getItem("usuarios")
// let usuarios = JSON.parse(usuariosGetJSON)

// // if (!usuarios) {
//     usuarios = {
//         "1" : {nome: "Doguinho", sobrenome: "Da Silva", login: "dog@gmail.com", password: "12345678", urlimg: "https://i.imgur.com/xtoLyW2.jpeg", funcao : 1}
//     }
//     let usuariosJSON = JSON.stringify(usuarios)
//     localStorage.setItem("usuarios", usuariosJSON)
// }

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// let livrosGetJSON = localStorage.getItem("livros")
// let livros = JSON.parse(livrosGetJSON)
// if (!livros) {
//     livros = {
//         8538083724 : {por: "Lewis Carrol (Autor)", descricao: "Alice no País das Maravilhas foi publicado em 1965 e é um clássico da literatura nonsense. Além da história da menina entediada que persegue um coelho branco, há várias passagens no livro que abordam física, filosofia e lógica. A continuação dessa história aparece em outra obra do autor, Alice através do espelho.",
//         categoria: "Literatura/Ficção", dataaquisicao: "9 outubro 2019", estado: "Novo", localizacaoFisica: "2-B", titulo: "Alice no país das maravilhas - Edição padrão",  urlimgitem: "https://m.media-amazon.com/images/I/81eAcV387dL._SL1500_.jpg"},
//         8538091352 : {por: "L. Frank Baum (Autor)", descricao: "Munchkins, Quadlings e pessoas de porcelana são alguns dos moradores desse lugar incrível para onde a pequena Dorothy foi enviada por um ciclone com seu cãozinho Totó. Agora, ela precisa seguir pela estrada de tijolos amarelos até chegar à Cidade de Esmeraldas. Lá vive o poderoso Mágico de Oz, que pode ser capaz de ajudá-la a voltar para casa. E nessa jornada ela encontrará amigos, perigos e muitas aventuras.",
//         categoria: "Literatura/Ficção", dataaquisicao: "22 agosto 2020", estado: "Novo", localizacaoFisica: "2-B", titulo: "O maravilhoso mágico de OZ Capa comum - Versão integral",  urlimgitem: "https://m.media-amazon.com/images/I/610oj93P09L._SL1000_.jpg"}
//     }
//     let livrosJSON = JSON.stringify(livros)
//     localStorage.setItem("livros", livrosJSON)
// }

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// let solicitadosGetJSON = localStorage.getItem("solicitados")
// let solicitados = JSON.parse(solicitadosGetJSON)
// if (!solicitados) { 
//     solicitados = {
//         1 : [{livroid: 8538083724, Dataemp: '12/12/2023', datadv: '19/12/2023', stats: 'Em andamento'}]
//     }
//     let solicitadosJSON = JSON.stringify(solicitados)
//     localStorage.setItem("solicitados", solicitadosJSON)
// }

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//abaixo ok
function verificacontas(login, senha) {
    var sql = "SELECT * FROM usuarios WHERE login = ? AND password = ?";

    con.query(sql, [login, senha], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
            var user = result[0];
            return { id: user.id, nome: user.nome, sobrenome: user.sobrenome, urlimg: user.urlimg, funcao: user.funcao };
        } else {
            return null;
        }
    });
}

//abaixo ok
function adicionacontas(nome, sobrenome, login, password, urlimg) {
    if (login == "" || nome == "" || sobrenome == "" || password == "" || urlimg == "") {
        return null;
    }

    var usuario = {
        nome: nome,
        sobrenome: sobrenome,
        login: login,
        password: password,
        urlimg: urlimg,
        funcao: 0
    };

    var sql = "INSERT INTO usuarios (nome, sobrenome, login, password, urlimg, funcao) VALUES ?";
    var values = [
        [usuario.nome, usuario.sobrenome, usuario.login, usuario.password, usuario.urlimg, usuario.funcao]
    ];

    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Número de registros inseridos: " + result.affectedRows);
    });
}

//abaixo ok
async function getLivro(id) {
    const [rows, fields] = await con.execute('SELECT * FROM livros WHERE id = ?', [id]);

    console.log(rows);

}
//abaixo ok
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

//abaixo ok
function adicionaLivro(id, por, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem, userid) {
    if (usuarios[userid].funcao == 0) {
        return false;
    } else {
        var livro = {
            id: id,
            por: por,
            descricao: descricao,
            categoria: categoria,
            dataaquisicao: dataaquisicao,
            estado: estado,
            localizacaoFisica: localizacaoFisica,
            titulo: titulo,
            urlimgitem: urlimgitem
        };

        var sql = "INSERT INTO livros SET ?";

        con.query(sql, livro, function (err, result) {
            if (err) throw err;
            console.log("Livro inserido: " + result.affectedRows);
        });

        return true;
    }
}


//abaixo ok
function editarLivro(id, por, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem, userid) {
    if (usuarios[userid].funcao == 0) {
        return false;
    } else {
        var livro = {
            por: por,
            descricao: descricao,
            categoria: categoria,
            dataaquisicao: dataaquisicao,
            estado: estado,
            localizacaoFisica: localizacaoFisica,
            titulo: titulo,
            urlimgitem: urlimgitem
        };

        var sql = "UPDATE livros SET ? WHERE id = ?";

        con.query(sql, [livro, id], function (err, result) {
            if (err) throw err;
            console.log("Número de livros atualizados: " + result.affectedRows);
        });

        return true;
    }
}

//abaixo ok
function deletalivro(iduser, idlivro) {
    if (usuarios[iduser].funcao == 0) {
        return false;
    } else {
        var sql = "DELETE FROM livros WHERE id = ?";

        con.query(sql, [idlivro], function (err, result) {
            if (err) throw err;
            console.log("Número de livros deletados: " + result.affectedRows);
        });

        return true;
    }
}

//abaixo ok
function solicitarLivro(iduser, idlivro, data1, data2) {
    var solicitacao = {
        iduser: iduser,
        idlivro: idlivro,
        data1: data1,
        data2: data2,
        stats: 'Em andamento'
    };

    var sql = "INSERT INTO solicitacoes SET ?";

    con.query(sql, solicitacao, function (err, result) {
        if (err) throw err;
        console.log("Solicitação inserida: " + result.affectedRows);
    });

    return true;
}

//abaixo ok
function devolverLivro(iduser, idlivro) {
    var sql = "UPDATE solicitacoes SET stats = 'Finalizado' WHERE iduser = ? AND idlivro = ? AND stats = 'Em andamento'";

    con.query(sql, [iduser, idlivro], function (err, result) {
        if (err) throw err;
        console.log("Número de livros devolvidos: " + result.affectedRows);
    });

    return true;
}

//abaixo ok
function livroPego(iduserid) {
    var sql = "SELECT * FROM solicitacoes INNER JOIN livros ON solicitacoes.idlivro = livros.id WHERE solicitacoes.iduser = ? AND solicitacoes.stats = 'Em andamento'";

    con.query(sql, [iduserid], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
            console.log(result);
            return result;
        } else {
            return false;
        }
    });
}