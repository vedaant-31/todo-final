const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: String,
    priority: { type: String, enum: ['low', 'mid', 'high'], default: 'low' }
});

module.exports = mongoose.model('Task', taskSchema);