const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../controllers/budgets');

router.get('/', budgetsCtrl.index);
router.use(require('../config/auth'));
router.post('/', checkAuth, budgetsCtrl.create);
router.delete('/:id', checkAuth, budgetsCtrl.delete)
router.get('/:id', checkAuth, budgetsCtrl.show);
router.put('/:id', checkAuth, budgetsCtrl.update);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
