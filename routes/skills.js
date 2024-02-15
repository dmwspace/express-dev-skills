var express = require('express');
var router = express.Router();
const skillsCtrl = require(('../controllers/skills'))

/* GET users listing. */


router.get('/new', skillsCtrl.new);
router.get('/', skillsCtrl.index);

router.post('/', skillsCtrl.create);

router.get('/:id', skillsCtrl.show);

module.exports = router;
