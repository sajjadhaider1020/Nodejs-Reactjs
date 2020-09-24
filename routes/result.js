var express = require('express');
var router = express.Router();
const {getUserResult}  = require('./../controller/getUserResult')


/* GET result. */
router.get('/', async (req,res,next) => {
    console.log(req.query)
let getResult = await getUserResult(req.query)
res.send(getResult)
});



module.exports = router;
