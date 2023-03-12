import Reservation from "../model/reservation";
// Controller for the Reservation
export async function postReservations(req, res){
    try{
        const formData = req.body; 
        if(!formData){
            return res.status(404).json({error: 'Form data is not provided!'})
        }
        Reservation.create(formData, (error, data)=>{
            return res.status(200).json(data); 
        })
    }catch(errors){
        return res.status(404).json({error: 'Posting the user is failed'});
    }
}

export async function getReservationAccordingToUser(req, res){
    try{
        const users = await Reservation.find({}); 
        if(!users){
            return res.status(404).json({error: 'Data is not found'})
        }
        // console.log(users); 
        res.status(200).json(users)
    }catch(errors){
        res.status(404).json({errors: 'Got error while fetching the data'})
    }
}
