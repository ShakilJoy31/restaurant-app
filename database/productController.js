import Products from "../model/product";

// Getting all the users from DB.
export async function getProduct (req, res) {
    try{
        const users = await Products.find({}); 
        if(!users){
            return res.status(404).json({error: 'Data is not found'})
        }
        // console.log(users); 
        res.status(200).json(users)
    }catch(errors){
        res.status(404).json({errors: 'Got error while fetching the data'})
    }
}

// Posting a user to the database
export async function postProduct(req, res){
    try{
        const formData = req.body; 
        if(!formData){
            return res.status(404).json({error: 'Form data is not provided!'})
        }
        Products.create(formData, (error, data)=>{
            return res.status(200).json(data); 
        })
    }catch(errors){
        return res.status(404).json({error: 'Posting the user is failed'});
    }
}