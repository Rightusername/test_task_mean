var express = require('express');
var router = express.Router();
var workerController = require('../controllers/workerController');


router.post('/', workerController.add);
router.get('/', workerController.list);
router.put('/', workerController.update);
router.delete('/:id', workerController.delete);

module.exports = router;