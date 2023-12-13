class DevolucaoDTO {
    constructor({ ItemId }) {
      this.validateItemId(ItemId);
      
      this.ItemId = ItemId;
    }

  
    validateItemId(ItemId) {
      if (!ItemId || !Number.isInteger(ItemId)) {
        throw new Error('ItemId inválido');
      }
    }
}
  
  module.exports = DevolucaoDTO