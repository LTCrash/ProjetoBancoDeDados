const UserRepository = require('../repository/UserRepository');

const UserService = {
  getAllUsers: async () => {
    try {
      return await UserRepository.getAllUsers();
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (Id) => {
    try {
      return await UserRepository.getUserById(Id);
    } catch (error) {
      throw error;
    }
  },

  createUser: async (userData) => {
    try {
      return await UserRepository.createUser(userData);
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (Id, userData) => {
    try {
      return await UserRepository.updateUser(Id, userData);
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (Id) => {
    try {
      return await UserRepository.deleteUser(Id);
    } catch (error) {
      throw error;
    }
  },

  // Adicione outras funções conforme necessário
};

module.exports = UserService;
