const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
    
    app.post('/api/stripe', requireLogin ,async (req, res)=>{

        await stripe.checkout.sessions.create({
            line_items: [
              {
                price_data: {currency: 'inr', product_data: {name: 'Credits'}, unit_amount: 500},
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: 'https://localhost:3000',
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user)

    });

}