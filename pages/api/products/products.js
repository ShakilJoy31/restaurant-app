import connectMongo from "../../../database/connection";
import { getProduct, postProduct } from "../../../database/productController";

export default function handler (req, res) {
    connectMongo().catch(()=> res.status(405).json({error: 'Error in the connection'})); 
    // Type of request
    const {method} = req; 
    switch(method){
        case 'GET':
            getProduct(req, res);
            break;
        case 'POST': 
            postProduct(req, res)
            break;
        default: 
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']); 
        res.status(405).end(`MEthod ${method} is not allowed`)
        break; 
    }
}