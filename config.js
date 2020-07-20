const config = {
    dbUrl: process.env.DB_URL || 'mongodb://djaramilloj:Waypooltec2019@cluster0-shard-00-00-hvhcs.mongodb.net:27017,cluster0-shard-00-01-hvhcs.mongodb.net:27017,cluster0-shard-00-02-hvhcs.mongodb.net:27017/chats_nodejs?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost:',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
};

module.exports = config;