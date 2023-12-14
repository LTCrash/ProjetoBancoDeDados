const EmprestimoRepository = require('../repository/EmprestimoRepository');

const EmprestimoService = {
  getAllEmps: async () => {
    try {
      return await EmprestimoRepository.getAllEmps();
    } catch (error) {
      throw error;
    }
  },

  getEmpById: async (Id) => {
    try {
      return await EmprestimoRepository.getEmpById(Id);
    } catch (error) {
      throw error;
    }
  },
  
  getEmpByItemId: async (ItemId) => {
    try {
      return await EmprestimoRepository.getEmpByItemId(ItemId);
    } catch (error) {
      throw error;
    }
  },

  createEmp: async (empData) => {
    try {
      return await EmprestimoRepository.createEmp(empData);
    } catch (error) {
      throw error;
    }
  },

  updateEmp: async (Id, ItemId, empData) => {
    try {
      return await EmprestimoRepository.updateEmp(Id, ItemId, empData);
    } catch (error) {
      throw error;
    }
  },

  deleteEmprestimo: async (ItemId) => {
    try {
      return await EmprestimoRepository.deleteEmprestimo(ItemId);
    } catch (error) {
      throw error;
    }
  },

  // Adicione outras funções conforme necessário
};

module.exports = EmprestimoService;
