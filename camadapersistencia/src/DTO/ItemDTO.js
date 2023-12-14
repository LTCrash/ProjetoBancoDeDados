class ItemDTO {
  constructor({ autor, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem }) {
    this.validateAutor(autor);
    this.validateDescricao(descricao);
    this.validateCategoria(categoria);
    this.validateDataAquisicao(dataaquisicao);
    this.validateEstado(estado);
    this.validateLocalizacaoFisica(localizacaoFisica);
    this.validateTitulo(titulo);
    this.validateUrlImgItem(urlimgitem);

    this.autor = autor;
    this.descricao = descricao;
    this.categoria = categoria;
    this.dataaquisicao = dataaquisicao;
    this.estado = estado;
    this.localizacaoFisica = localizacaoFisica;
    this.titulo = titulo;
    this.urlimgitem = urlimgitem;
  }


  validateAutor(autor) {
    if (!autor || typeof autor !== 'string') {
      throw new Error('Autor inválido');
    }
  }

  validateDescricao(descricao) {
    if (!descricao || typeof descricao !== 'string') {
      throw new Error('Descrição inválida');
    }
  }

  validateCategoria(categoria) {
    if (!categoria || typeof categoria !== 'string') {
      throw new Error('Categoria inválida');
    }
  }

  validateDataAquisicao(dataaquisicao) {
    // Exemplo: Verifica se a data está no formato YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dataaquisicao || !dateRegex.test(dataaquisicao)) {
      throw new Error('Data de aquisição inválida');
    }
  }

  validateEstado(estado) {
    // Exemplo: Verifica se o estado é uma string válida
    if (!estado || typeof estado !== 'string') {
      throw new Error('Estado inválido');
    }
  }

  validateLocalizacaoFisica(localizacaoFisica) {
    if (!localizacaoFisica || typeof localizacaoFisica !== 'string') {
      throw new Error('Localização física inválida');
    }
  }

  validateTitulo(titulo) {
    if (!titulo || typeof titulo !== 'string') {
      throw new Error('Título inválido');
    }
  }

  validateUrlImgItem(urlimgitem) {
    // Exemplo: Verifica se a URL é válida
    if (!urlimgitem) {
      throw new Error('URL da imagem inválida');
    }
  }
}

module.exports = ItemDTO