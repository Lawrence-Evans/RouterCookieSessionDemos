const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("Not admin")
})

router.get('/private', (req, res) => {
    res.send('Private section')
})

router.get('/deleteAll', (req, res) => {
    res.send('All has been deleted')
})

module.exports = router