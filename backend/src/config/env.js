require('dotenv').config();

module.exports = {
    MONGO_URI: `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/`, // Constrói a URI do MongoDB
    PORT: process.env.PORT || 3000, // Porta padrão do servidor
};