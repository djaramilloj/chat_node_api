const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');


router.post('/', (req, res) => {
    const users = req.body.users;
    controller.add(users)
        .then(() => response.success(req, res, 'chat creado', 201))
        .catch(e => response.error(req, res, 'Internal error', 500, e))
})


router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    controller.list(userId)
        .then(data => response.success(req, res, data, 200))
        .catch(e => response.error(req, res, 'Internal error', 500, e))
})


module.exports = router;