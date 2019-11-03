var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('özel route girildi');
        next();
    },
    logger: function (req, res, next) {
        console.log(req.method + " " + req.originalUrl);
        next();
    }
}

// app.get("/",function name(req, res) {
//     res.send('selamlar dünya')
// });

app.use(middleware.logger);

app.get('/hakkimda', middleware.requireAuthentication, function (req, res) {
    res.send('hakkımda sayfasındasınız.')
})

app.use(express.static(__dirname + '/publick'))

app.listen(PORT, function () {
    console.log('express.js başlatıldı');
    
});