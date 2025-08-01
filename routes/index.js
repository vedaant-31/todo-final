const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.render('index', { tasks });
});

router.post('/tasks', async (req, res) => {
    if (!req.body.title.trim()) return res.redirect('/');
    await Task.create({ title: req.body.title, priority: req.body.priority });
    res.redirect('/');
});

router.delete('/tasks/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

router.put('/tasks/edit/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        priority: req.body.priority,
    });
    res.redirect('/');
});

module.exports = router;
