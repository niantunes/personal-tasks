const mongoose = require('mongoose');
const User = require('../models/user.model');
const Task = require('../models/task.model');

const initializeCollections = async () => {
    try {
        // Verifica se as collections existem
        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);

        // Inicializa collection de Users se não existir
        if (!collectionNames.includes('users')) {
            console.log('Criando collection: users');
            await User.createCollection();
            console.log('Collection users criada com sucesso!');
        }

        // Inicializa collection de Tasks se não existir
        if (!collectionNames.includes('tasks')) {
            console.log('Criando collection: tasks');
            await Task.createCollection();
            console.log('Collection tasks criada com sucesso!');
        }

    } catch (error) {
        console.error('Erro ao inicializar collections:', error);
        throw error;
    }
};

module.exports = initializeCollections;