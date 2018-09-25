const express = require('express');
const router = express.Router();
const accounts = require('../controller/account.controller.js');

router.post('/', accounts.create);
router.get('/', accounts.findAll);
router.get('/:id', accounts.findById);
router.put('/:id', accounts.update);
router.delete('/:id', accounts.delete);

module.exports = router;