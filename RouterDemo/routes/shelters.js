const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("All shelters")
})

router.post('/', (req, res) => {
    res.send("New shelter")
})

router.get('/:id', (req, res) => {
    res.send("One shelter")
})

router.get('/:id/edit', (req, res) => {
    res.send("Edit one shelter")
})

module.exports = router;