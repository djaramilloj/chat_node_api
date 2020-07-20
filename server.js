const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb://djaramilloj:Waypooltec2019@cluster0-shard-00-00-hvhcs.mongodb.net:27017,cluster0-shard-00-01-hvhcs.mongodb.net:27017,cluster0-shard-00-02-hvhcs.mongodb.net:27017/chats_nodejs?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
socket.connection(server);
router(app);

app.use('/app', express.static('public'))

server.listen(3000, () => {
    console.log('La aplicacion esta escuchando en http://localhost:3000');
});

