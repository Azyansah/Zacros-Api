__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
	res.sendFile(__path + '/views/index.html')
})
router.get('/css/style.css', async(req, res) => {
	res.sendFile(__path + '/views/css/style.css')
})

router.get('/css/404.css', async(req, res) => {
	res.sendFile(__path + '/views/css/404.css')
})

//Kalo page yang di cari engga ada, nanti muncul ini:v
router.use(function (req, res) {
res.status(404)
    res.sendFile(__path + '/views/404.html')
});


module.exports = router
