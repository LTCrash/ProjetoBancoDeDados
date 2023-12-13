const express = require('express');
const ItemService = require('../service/ItemService.js');
const ItemDTO = require('../DTO/ItemDTO.js')
const router = express.Router();

router.get('/item', async (req, res) => {
  try {
    const items = await ItemService.getAllItems()
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Erro ao obter os itens.' });
  }
});

router.post('/item', async (req, res) => {
  try {
    const itemData = new ItemDTO(req.body);
    const itemId = await ItemService.createItem(itemData);
    res.json({ message: 'Item criado com sucesso!', itemId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o item.' });
  }
});

router.get('/item/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const item = await ItemService.getItemById(itemId);
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter o item.' });
  }
});

router.put('/item/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const itemData = new ItemDTO(req.body);
    const result = await ItemService.updateItem(itemId, itemData);
    res.json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o item.' });
  }
});

router.delete('/item/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const result = await ItemService.deleteItem(itemId);
    res.json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir o item.' });
  }
});

module.exports = router;
