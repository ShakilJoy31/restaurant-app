const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const { amountToPay } = req.body;
    console.log(amountToPay); 
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountToPay,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  };