const pool = require('../config/database');


const UserRepository = {
  getAllUsers: async () => {
    try {
      const [rows] = await pool.execute('SELECT * FROM usuario');
      return rows;
    } catch (error) {
      console.error('Erro ao obter users:', error.message);
      throw error;
    }
  },

  createUser: async (userData) => {
    try {
      const { Nome, Sobrenome, Funcao, login, password, UrlImg } = userData;
      const [result] = await pool.execute(
        'INSERT INTO usuario (Nome, Sobrenome, Funcao, login, password, UrlImg) VALUES (?, ?, ?, ?, ?, ?)',
        [Nome, Sobrenome, Funcao, login, password, UrlImg]
      );
      return result.insertId; // Retorna o ID do user adicionado
    } catch (error) {
      console.error('Erro ao adicionar user:', error.message);
      throw error;
    }
  },

  getUserById: async (Id) => {
    try {
      const [rows] = await pool.execute('SELECT * FROM usuario WHERE Id = ?', [Id]);
      if (rows.length === 0) {
        throw new Error('User não encontrado');
      }
      return rows[0];
    } catch (error) {
      console.error('Erro ao obter user por ID:', error.message);
      throw error;
    }
  },

  updateUser: async (Id, userData) => {
    try {
      const { Nome, Sobrenome, Funcao, login, password, UrlImg } = userData;
      const [result] = await pool.execute(
        'UPDATE usuario SET Nome = ?, Sobrenome = ?, Funcao = ?, login = ?, password = ?, UrlImg = ? WHERE Id = ?',
        [Nome, Sobrenome, Funcao, login, password, UrlImg, Id]
      );
      if (result.affectedRows === 0) {
        throw new Error('User não encontrado');
      }
      return 'User atualizado com sucesso';
    } catch (error) {
      console.error('Erro ao atualizar user:', error.message);
      throw error;
    }
  },

  deleteUser: async (Id) => {
    try {
      const [result] = await pool.execute('DELETE FROM usuario WHERE Id = ?', [Id]);
      if (result.affectedRows === 0) {
        throw new Error('User não encontrado');
      }
      return 'User excluído com sucesso';
    } catch (error) {
      console.error('Erro ao excluir user:', error.message);
      throw error;
    }
  },

  // Adicione outras funções conforme necessário
};

module.exports = UserRepository;