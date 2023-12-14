const DevolucaoRepository = require('../repository/DevolucaoRepository');

const DevolucaoService = {
  getAllDevs: async () => {
    try {
      return await DevolucaoRepository.getAllDevs();
    } catch (error) {
      throw error;
    }
  },

  getDevByItemId: async (ItemId) => {
    try {
      return await DevolucaoRepository.getDevByItemId(ItemId);
    } catch (error) {
      throw error;
    }
  },

  createDevs: async (devData) => {
    try {
      return await DevolucaoRepository.createDevs(devData);
    } catch (error) {
      throw error;
    }
  },

  updateDev: async (newItemId, ItemId) => {
    try {
      return await DevolucaoRepository.updateDev(newItemId, ItemId);
    } catch (error) {
      throw error;
    }
  },

  deleteDevolucao: async (ItemId) => {
    try {
      return await DevolucaoRepository.deleteDevolucao(ItemId);
    } catch (error) {
      throw error;
    }
  },

  // Adicione outras funções conforme necessário
};

module.exports = DevolucaoService;
