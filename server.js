import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import compression from 'compression'; //for gzip

import enforce from 'express-sslify'; 

import Stripe from 'stripe';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if(process.env.NODE_ENV !== 'production') dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(compression()); // for gzip

app.use(enforce.HTTPS({trustProtoHeader: true}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
    if(error) throw error;

    console.log("Server started on port "+port);
});

app.get('/service-worker.js', (req, res) => {
    res.sendFile(__dirname, '..', 'build', 'service-worker.js');
})

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).send({error: stripeErr});
        } else {
            res.status(200).send({success: stripeRes});
        }
    });
});