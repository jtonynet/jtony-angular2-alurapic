var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

var processPort = process.env.PORT || 3000;

http.createServer(app).listen(processPort, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});

