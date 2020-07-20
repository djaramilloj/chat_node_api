// capa de red que se encargara de recibir la petcion http, procesar y enviar al controller
const express = require('express');
const multer = require('multer');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

const upload = multer({
    dest: 'uploads/',
})


router.get('/', (req, res) => {
    const filterMessage = req.query.user || null;
    controller.list(filterMessage)
        .then(data => {
            response.success(req, res, data);
        })
        .catch(e => {
            response.error(req, res, 'Hubo un error, intenta de nuevo', 500, e)
        })
})


router.post('/', upload.single('file'), (req, res) => {
    controller.add(req.body.chat, req.body.user, req.body.message, req.file)
        .then(data => {
            response.success(req, res, data);
        })
        .catch(e => {
            response.error(req, res, 'Información invalida', 400, e)
        })
})


router.patch('/:id', (req, res) => {
    const id = req.params.id;
    controller.update(id, req.body.message)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e)
        })
})


router.delete('/:id', (req, res)=> {
    const id = req.params.id;
    controller.delete(id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} fue eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e)
        })
})


module.exports = router;
