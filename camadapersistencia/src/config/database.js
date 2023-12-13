const { createPool } = require('mysql2');

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  database: 'sys',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Evento quando uma conexão é adquirida do pool
pool.on('acquire', (connection) => {
  console.log('Conexão adquirida do pool');
  // Pode adicionar mensagens adicionais ou lógica aqui
});

// Evento quando a aplicação é encerrada
process.on('SIGINT', () => {
  pool.end((err) => {
    if (err) {
      return console.error('Erro ao fechar a conexão do pool:', err.message);
    }
    console.log('Conexão do pool fechada com sucesso');
    process.exit();
  });
});

module.exports = pool.promise();
