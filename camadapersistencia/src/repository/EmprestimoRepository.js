const pool = require('../config/database');


const EmprestimoRepository = {
  getAllEmps: async () => {
    try {
      const [rows] = await pool.execute('SELECT * FROM solicitaremprestimo');
      return rows;
    } catch (error) {
      console.error('Erro ao obter emprestimos:', error.message);
      throw error;
    }
  },

  createEmp: async (empData) => {
    try {
      const { Id, ItemId, dataEmprestimo, dataDevolucao, status } = empData;
      const [result] = await pool.execute(
        'INSERT INTO solicitaremprestimo (Id, ItemId, dataEmprestimo, dataDevolucao, status) VALUES (?, ?, ?, ?, ?)',
        [Id, ItemId, dataEmprestimo, dataDevolucao, status]
      );
      return result.insertId; // Retorna o ID do usuario que pegou o material 
    } catch (error) {
      console.error('Erro ao adicionar emprestimo:', error.message);
      throw error;
    }
  },

  getEmpById: async (Id) => {
    try {
      const [rows] = await pool.execute('SELECT * FROM solicitaremprestimo WHERE Id = ?', [Id]);
      if (rows.length === 0) {
        throw new Error('Id não encontrado');
      }
      return rows[0];
    } catch (error) {
      console.error('Erro ao obter emprestimos por ID:', error.message);
      throw error;
    }
  },

  getEmpByItemId: async (ItemId) => {
    try {
      const [rows] = await pool.execute('SELECT * FROM solicitaremprestimo WHERE ItemId = ?', [ItemId]);
      if (rows.length === 0) {
        throw new Error('ItemId não encontrado');
      }
      return rows[0];
    } catch (error) {
      console.error('Erro ao obter emprestimos por ItemId:', error.message);
      throw error;
    }
  },

  updateEmp: async (Id, ItemId, empData) => {
    try {
      const { dataEmprestimo, dataDevolucao, status } = empData;
      const [result] = await pool.execute(
        'UPDATE solicitaremprestimo SET dataEmprestimo = ?, dataDevolucao = ?, status = ? WHERE Id = ? AND ItemId = ?',
        [dataEmprestimo, dataDevolucao, status, Id, ItemId]
      );
      if (result.affectedRows === 0) {
        throw new Error('Emprestimo não encontrado');
      }
      return 'Emprestimo atualizado com sucesso';
    } catch (error) {
      console.error('Erro ao atualizar Enprestimo:', error.message);
      throw error;
    }
  },

  deleteEmprestimo: async (ItemId) => {
    try {
      const [result] = await pool.execute('DELETE FROM solicitaremprestimo WHERE ItemId = ?', [ItemId]);
      if (result.affectedRows === 0) {
        throw new Error('ItemId não encontrado');
      }
      return 'Emprestimo excluído com sucesso';
    } catch (error) {
      console.error('Erro ao excluir Emprestimo:', error.message);
      throw error;
    }
  },

  // Adicione outras funções conforme necessário
};

module.exports = EmprestimoRepository;