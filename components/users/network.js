const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');


router.post('/', (req, res) => {
    const name = req.body.name;
     controller.add(name)
        .then(data => response.success(req, res, data, 201))
        .catch(e => response.error(req, res, 'Internal error', 500, e))
})


router.get('/', (req, res) => {
    const filterName = req.query.name || null;
    controller.list(filterName)
        .then(data => response.success(req, res, data))
        .catch(e => response.error(req, res, 'Internal error', 500, e))
})


module.exports = router;