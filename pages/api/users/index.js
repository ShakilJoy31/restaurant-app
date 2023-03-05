import connectMongo from "../../../database/connection";
import { getUser, postUsers, updateUserWithFeedBack, paymentOfUser } from "../../../database/controller";

export default function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: 'Error in the connection' }));
    // Type of request
    const { method } = req;
    switch (method) {
        case 'GET':
            getUser(req, res);
            break;
        case 'POST':
            postUsers(req, res)
            break;
        case 'PUT':
            updateUserWithFeedBack(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`MEthod ${method} is not allowed`)
            break;
    }

        // app.post('/create-payment-intent', async (req, res) => {
        //     const { price } = req.body;
        //     const amount = price * 100;
        //     const paymentIntent = await stripe.paymentIntents.create({
        //         amount: amount,
        //         currency: 'usd',
        //         payment_method_types: ['card']
        //     });
        //     console.log(paymentIntent);
        //     return res.send({ clientSecret: paymentIntent.client_secret })
        // })
}