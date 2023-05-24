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

const fallback = (req, res) => res.sendFile('src/index.html', { root: process.cwd() });
// Static routes
app.use(express.static(`${__dirname}/src/assets`));
app.use('/assets', express.static(`${process.cwd()}/src/assets`));
app.use('/', fallback);


app.listen(3069, () => {
    console.log('Express running');
});