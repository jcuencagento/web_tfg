const express = require('express');

const app = express();
const fallback = (req, res) => res.sendFile('www/index.html', { root: __dirname });
app.use('/home', fallback);
app.use('/', fallback);
app.use((err, req, res, next) => {
    console.log(err);
    if (err.status === 401) {
        fallback(req, res);
    } else {
        next(err);
    }
});

app.listen(3040, () => {
    console.log('Express running');
});