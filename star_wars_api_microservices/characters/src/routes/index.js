const { Router } = require('express');

const router = Router();
const controllers = require('../controllers');

router.get('/', controllers.getCharacters);

router.post('/', controllers.createCharacters);

module.exports = router;