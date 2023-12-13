const pool = require('../config/database');


const ItemRepository = {
  getAllItems: async () => {
    try {
      const [rows] = await pool.execute('SELECT * FROM item');
      return rows;
    } catch (error) {
      console.error('Erro ao obter itens:', error.message);
      throw error;
    }
  },

  createItem: async (itemData) => {
    try {
      const { ItemId, autor, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem } = itemData;
      const [result] = await pool.execute(
        'INSERT INTO item ( ItemId, autor, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [ItemId, autor, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem]
      );
      return ItemId; // Retorna o ID do item adicionado
    } catch (error) {
      console.error('Erro ao adicionar item:', error.message);
      throw error;
    }
  },

  getItemById: async (itemId) => {
    try {
      const [rows] = await pool.execute('SELECT * FROM item WHERE ItemId = ?', [itemId]);
      if (rows.length === 0) {
        throw new Error('Item não encontrado');
      }
      return rows[0];
    } catch (error) {
      console.error('Erro ao obter item por ID:', error.message);
      throw error;
    }
  },

  updateItem: async (itemId, itemData) => {
    try {
      const { autor, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem } = itemData;
      const [result] = await pool.execute(
        'UPDATE item SET autor = ?, descricao = ?, categoria = ?, dataaquisicao = ?, estado = ?, localizacaoFisica = ?, titulo = ?, urlimgitem = ? WHERE ItemId = ?',
        [autor, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem, itemId]
      );
      if (result.affectedRows === 0) {
        throw new Error('Item não encontrado');
      }
      pool.execute('INSERT INTO modificaritem (itemId, autor, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [itemId, autor, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem]);
      return 'Item atualizado com sucesso';
    } catch (error) {
      console.error('Erro ao atualizar item:', error.message);
      throw error;
    }
  },

  deleteItem: async (itemId) => {
    try {
      const [result] = await pool.execute('DELETE FROM item WHERE ItemId = ?', [itemId]);
      if (result.affectedRows === 0) {
        throw new Error('Item não encontrado');
      }
      pool.execute('INSERT INTO excluiritem (itemId, autor, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [itemId, autor, descricao, categoria, dataaquisicao, estado, localizacaoFisica, titulo, urlimgitem]);
      return 'Item excluído com sucesso';
    } catch (error) {
      console.error('Erro ao excluir item:', error.message);
      throw error;
    }
  },

  // Adicione outras funções conforme necessário
};

module.exports = ItemRepository;