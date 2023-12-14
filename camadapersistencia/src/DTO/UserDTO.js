class UserDTO {
    constructor({ Nome, Sobrenome, Funcao, login, password, UrlImg }) {
      this.validateNome(Nome);
      this.validateSobrenome(Sobrenome);
      this.validateFuncao(Funcao);
      this.validateLogin(login);
      this.validatePassword(password);
      this.validateUrlImg(UrlImg);
      
      
      this.Nome = Nome;
      this.Sobrenome = Sobrenome;
      this.Funcao = Funcao;
      this.login = login;
      this.password = password;
      this.UrlImg = UrlImg;
    }
  
  
    validateNome(Nome) {
      if (!Nome || typeof Nome !== 'string') {
        throw new Error('Nome inválido');
      }
    }
  
    validateSobrenome(Sobrenome) {
      if (!Sobrenome || typeof Sobrenome !== 'string') {
        throw new Error('Sobrenome inválido');
      }
    }
  
    validateFuncao(Funcao) {
      if (!Funcao || !Number.isInteger(Funcao)) {
        throw new Error('Função inválida');
      }
    }
  
    validateLogin(login) {
      // Exemplo: Verifica se o estado é uma string válida
      if (!login || typeof login !== 'string') {
        throw new Error('Login inválido');
      }
    }
  
    validatePassword(password) {
      if (!password || typeof password !== 'string') {
        throw new Error('Password inválida');
      }
    }
  
    
  
    validateUrlImg(UrlImg) {
      // Exemplo: Verifica se a URL é válida
      if (!UrlImg) {
        throw new Error('URL da imagem inválida');
      }
    }
  }
  
  module.exports = UserDTO