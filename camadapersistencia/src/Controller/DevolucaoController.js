const express = require('express');
const DevolucaoService = require('../service/DevolucaoService.js');
const DevolucaoDTO = require('../DTO/DevolucaoDTO.js')
const router = express.Router();

router.get('/dev', async (req, res) => {
  try {
    const devs = await DevolucaoService.getAllDevs()
    res.json(devs);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Erro ao obter as devoluções.' });
  }
});

router.post('/dev', async (req, res) => {
  try {
    const devData = new DevolucaoDTO(req.body);
    const itemId = await DevolucaoService.createDevs(devData);
    res.json({ message: 'Devolução criada com sucesso!', itemId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar a devolução.' });
  }
});

router.get('/dev/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const item = await DevolucaoService.getDevByItemId(itemId);
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter a devolução.' });
  }
});

router.put('/dev/:ItemId', async (req, res) => {
  try {
    const { ItemId } = req.params;
    const devData = new DevolucaoDTO(req.body);
    const result = await DevolucaoService.updateDev(ItemId, devData);
    res.json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar a devolução.' });
  }
});

router.delete('/dev/:ItemId', async (req, res) => {
  try {
    const { ItemId } = req.params;
    const result = await DevolucaoService.deleteDevolucao(ItemId);
    res.json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir a devolução.' });
  }
});

module.exports = router;
