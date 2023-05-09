const express = require('express');
const helmet = require('helmet');

const app = express();
// Security
app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
            scriptSrc: ["'self'", "'unsafe-eval'"]
        }
    })
);

const fallback = (req, res) => res.sendFile('www/index.html', { root: process.cwd() });
// Static routes
app.use(express.static(`${__dirname}/www/assets`));
app.use('/assets', express.static(`${process.cwd()}/www/assets`));
app.use('/', fallback);


app.listen(3069, () => {
    console.log('Express running');
});