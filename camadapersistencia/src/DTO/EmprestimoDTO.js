class EmprestimoDTO {
    constructor({ Id, ItemId, dataEmprestimo, dataDevolucao, status }) {
      this.validateId(Id);
      this.validateItemId(ItemId);
      this.validateDataEmprestimo(dataEmprestimo);
      this.validateDataDevolucao(dataDevolucao);
      this.validateStatus(status);
      
      this.Id = Id;
      this.ItemId = ItemId;
      this.dataEmprestimo = dataEmprestimo;
      this.dataDevolucao = dataDevolucao;
      this.status = status;
    }
  
  
    validateId(Id) {
      if (!Id || !Number.isInteger(Id) ) {
        throw new Error('Id inválido');
      }
    }
  
    validateItemId(ItemId) {
      if (!ItemId || !Number.isInteger(ItemId)) {
        throw new Error('ItemId inválido');
      }
    }
  
    validateDataEmprestimo(dataEmprestimo) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dataEmprestimo || !dateRegex.test(dataEmprestimo)) {
        throw new Error('Data de empréstimo inválida');
    }
    }

    validateDataDevolucao(dataDevolucao) {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dataDevolucao || !dateRegex.test(dataDevolucao)) {
          throw new Error('Data de devolução inválida');
        }
      }
  
    validateStatus(status) {
      if (!status || typeof status !== 'string') {
        throw new Error('Status inválido');
      }
    }
} 
    
  
  module.exports = EmprestimoDTO