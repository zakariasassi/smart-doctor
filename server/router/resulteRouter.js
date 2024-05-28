const express = require('express');
const router = express.Router();
const resulteController = require('../controller/ResulteContrller');

// Routes for CRUD operations
router.post('/', resulteController.createResult);
router.get('/', resulteController.getAllResults);
router.get('/:id', resulteController.getResultById);
router.put('/:id', resulteController.updateResult);
router.delete('/:id', resulteController.deleteResult);


router.get('/all/:data' , resulteController.getAllYesResultsByID)
module.exports = router;
