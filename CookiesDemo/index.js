const express = require ('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thesecret'));

app.get('/greet', (req, res) => {
    console.log(req.cookies)
    res.send("Hey")
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Big Tee');
    res.send('You got a cookie')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('veg', 'parsnip', { signed: true })
    res.send('Cookie signed')
})

app.get('/verifyveg', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log("Listening")
})