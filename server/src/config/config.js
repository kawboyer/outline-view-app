module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_OUTLINE || 'outline_db',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      storage: './outline_db.mysql'
    }
  }
};
