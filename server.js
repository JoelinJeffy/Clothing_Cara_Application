const stripe = require('stripe')('sk_test_51JrQUiSH4rFfOIzNxOeAzZc65ODRrEa3rXPiXj2gSYofU2TBVf7KwDSYZCotUKjFVuJWGzy3B2revzkxnT3CyvYI00PSNRLwOC');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1PZrtxSH4rFfOIzNCwgrHE8Y',
                quantity: 1,
            },
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1PZrtxSH4rFfOIzNCwgrHE8Y',
                quantity: 1,
            },
            
        ],
        mode: 'payment',
        success_url: 'http://localhost:4200',
        cancel_url: 'http://localhost:4200',
    });

    res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));