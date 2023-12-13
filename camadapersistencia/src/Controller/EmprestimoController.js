const express = require('express');
const EmprestimoService = require('../service/EmprestimoService.js');
const EmprestimoDTO = require('../DTO/EmprestimoDTO.js')
const router = express.Router();

router.get('/emp', async (req, res) => {
  try {
    const emps = await EmprestimoService.getAllEmps()
    res.json(emps);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Erro ao obter os empréstimos.' });
  }
});

router.post('/emp', async (req, res) => {
  try {
    const empData = new EmprestimoDTO(req.body);
    const ItemId = await EmprestimoService.createEmprestimo(empData);
    res.json({ message: 'Emprestimo criado com sucesso!', ItemId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o emprestimo.' });
  }
});

router.get('/emp/:Id', async (req, res) => {
  try {
    const { Id } = req.params;
    const emp = await EmprestimoService.getEmpById(Id);
    res.json(emp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter o empréstimo.' });
  }
});

router.get('/emp/:ItemId', async (req, res) => {
    try {
      const { ItemId } = req.params;
      const emp = await EmprestimoService.getEmpByItemId(ItemId);
      res.json(emp);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter o empréstimo.' });
    }
  });

router.put('/emp/:Ids', async (req, res) => {
  try {
    const { Id, ItemId } = req.params;
    const empData = new EmprestimoDTO(req.body);
    const result = await EmprestimoService.updateEmp(Id, ItemId, empData);
    res.json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o empréstimo.' });
  }
});

router.delete('/emp/:ItemId', async (req, res) => {
  try {
    const { ItemId } = req.params;
    const result = await EmprestimoService.deleteEmprestimo(ItemId);
    res.json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir o empréstimo.' });
  }
});

module.exports = router;
