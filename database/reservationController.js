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
        res.status(200).json(users)
    }catch(errors){
        res.status(404).json({errors: 'Got error while fetching the data'})
    }
}


export async function deleteReservation(req, res){
    try{
        const {userId} = req.query; 
        if(userId){
            const user = await Reservation.findByIdAndDelete(userId); 
            return res.status(200).json({deleted: user}); 
        }
        res.status(404).json({error:'User id is not selected'}); 
    }catch(error){
        res.status(404).json({error: 'Operation failed to delete the data....!'})
    }
}
