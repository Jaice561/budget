const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../controllers/budgets');


router.post('/', budgetsCtrl.create);
router.get('/', budgetsCtrl.index);
router.delete('/:id', budgetsCtrl.delete)
router.get('/:id', budgetsCtrl.show);
router.put('/:id', budgetsCtrl.update);

module.exports = router;
