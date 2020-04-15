const express = require('express');
const routes = express.Router();

const executeController = require('./controllers/ExecuteController');

routes.get('/execute', executeController.index)

module.exports = routes;