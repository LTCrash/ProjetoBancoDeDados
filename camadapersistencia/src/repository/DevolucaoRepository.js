const pool = require('../config/database');


const DevolucaoRepository = {
  getAllDevs: async () => {
    try {
      const [rows] = await pool.execute('SELECT * FROM realizardevolucao');
      return rows;
    } catch (error) {
      console.error('Erro ao obter devolucoes:', error.message);
      throw error;
    }
  },

  createDevs: async (devData) => {
    try {
      const { ItemId } = devData;
      const [result] = await pool.execute(
        'INSERT INTO realizardevolucao (ItemId) VALUES (?)',
        [ItemId]
      );
      pool.execute('UPDATE solicitaremprestimo SET status = "devolvido" WHERE ItemId = ?', [ItemId]);
      return result.insertId; // Retorna o ID do usuario que pegou o material 
    } catch (error) {
      console.error('Erro ao adicionar emprestimo:', error.message);
      throw error;
    }
  },

  getDevByItemId: async (ITemId) => {
    try {
      const [rows] = await pool.execute('SELECT * FROM realizardevolucao WHERE ItemId = ?', [Id]);
      if (rows.length === 0) {
        throw new Error('ItemId não encontrado');
      }
      return rows[0];
    } catch (error) {
      console.error('Erro ao obter Devolucoes por ItemId:', error.message);
      throw error;
    }
  },

  
  updateDev: async (newItemId, ItemId) => {
    try {
      const [result] = await pool.execute(
        'UPDATE realizardevolucao SET ItemId = ? WHERE ItemId = ?',
        [newItemId, ItemId]
      );
      if (result.affectedRows === 0) {
        throw new Error('Devolucao não encontrado');
      }
      return 'Devolucao atualizado com sucesso';
    } catch (error) {
      console.error('Erro ao atualizar Devolucao:', error.message);
      throw error;
    }
  },

  deleteDevolucao: async (ItemId) => {
    try {
      const [result] = await pool.execute('DELETE FROM realizardevolucao WHERE ItemId = ?', [ItemId]);
      if (result.affectedRows === 0) {
        throw new Error('ItemId não encontrado');
      }
      return 'Devolucao excluída com sucesso';
    } catch (error) {
      console.error('Erro ao excluir Devolucao:', error.message);
      throw error;
    }
  },

  // Adicione outras funções conforme necessário
};

module.exports = DevolucaoRepository;