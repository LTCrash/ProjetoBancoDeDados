const ItemRepository = require('../repository/ItemRepository');

const ItemService = {
  getAllItems: async () => {
    try {
      return await ItemRepository.getAllItems();
    } catch (error) {
      throw error;
    }
  },

  getItemById: async (itemId) => {
    try {
      return await ItemRepository.getItemById(itemId);
    } catch (error) {
      throw error;
    }
  },

  createItem: async (itemData) => {
    try {
      // Adicione lógica adicional, se necessário, antes de chamar o repositório para criar um item
      // Exemplo: Validar dados, gerar valores padrão, etc.
      // Depois, chame o repositório para criar o item
      return await ItemRepository.createItem(itemData);
    } catch (error) {
      throw error;
    }
  },

  updateItem: async (itemId, itemData) => {
    try {
      return await ItemRepository.updateItem(itemId, itemData);
    } catch (error) {
      throw error;
    }
  },

  deleteItem: async (itemId) => {
    try {
      return await ItemRepository.deleteItem(itemId);
    } catch (error) {
      throw error;
    }
  },

  // Adicione outras funções conforme necessário
};

module.exports = ItemService;
