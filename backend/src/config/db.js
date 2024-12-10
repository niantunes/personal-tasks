const mongoose = require('mongoose');
const { MONGO_URI } = require('./env');
const initializeCollections = require('./db-init');

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado com sucesso!');
        
        // Inicializa as collections após a conexão
        await initializeCollections();
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;