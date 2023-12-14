const express = require('express');
const UserService = require('../service/UserService.js');
const UserDTO = require('../DTO/UserDTO.js')
const router = express.Router();

router.get('/user', async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Erro ao obter os usuários.' });
  }
});

router.post('/user', async (req, res) => {
  try {
    const userData = new UserDTO(req.body);
    const Id = await UserService.createUser(userData);
    res.json({ message: 'User criado com sucesso!', Id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o Usuário.' });
  }
});

router.get('/user/:Id', async (req, res) => {
  try {
    const { Id } = req.params;
    const user = await UserService.getUserById(Id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter o usuário.' });
  }
});

router.put('/user/:Id', async (req, res) => {
  try {
    const { Id } = req.params;
    const userData = new UserDTO(req.body);
    const result = await UserService.updateUser(Id, userData);
    res.json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o usuário.' });
  }
});

router.delete('/user/:Id', async (req, res) => {
  try {
    const { Id } = req.params;
    const result = await UserService.deleteUser(Id);
    res.json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir o usuário.' });
  }
});

module.exports = router;
