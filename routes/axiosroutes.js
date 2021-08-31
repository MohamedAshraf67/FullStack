const express = require('express');
const axiosRouter = express.Router();
const axiosController = require('./controller/axios');

axiosRouter.get('/', axiosController.axios_index);
module.exports = (axiosRouter);
