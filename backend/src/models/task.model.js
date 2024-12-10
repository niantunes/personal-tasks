const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    priority: { 
        type: String, 
        enum: ['baixa', 'média', 'alta'],
        required: true
    },
    status: {
        type: String,
        enum: ['pendente', 'concluído'],
        default: 'pendente'
    }
}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;