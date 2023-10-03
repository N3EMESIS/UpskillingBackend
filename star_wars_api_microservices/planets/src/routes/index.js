const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', controllers.getPlanets);

router.post('/', controllers.postFilms);

module.exports = router;