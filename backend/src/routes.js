const express = require('express');
const routes = express.Router();

const executeController = require('./controllers/ExecuteController');

routes.get('/execute', executeController.index);

routes.get('/users', (request, response)=>{
    return response.json({
        evento: 'teste',
        aluno:'ok'
    });
});

module.exports = routes;