const baseUrl = 'http://localhost:3000';
// Get all the user from the database

// http://localhost:3000
// https://restaurant-app-flame.vercel.app

export const getUser = async () => {
    const response = await fetch(`${baseUrl}/api/users`)
    const json = await response.json();
    return json;
}

// Get Product from database
export const getProduct = async () => {
    const response = await fetch(`${baseUrl}/api/products/products`)
    const json = await response.json();
    return json;
}


// Post user to the database
export const addUser = async (formData) => {
    try {
        const Option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/api/users`, Option);
        const json = await response.json();
        return json;
    } catch (error) {
        return (error);
    }
}

// Post a user to the database. 
export const postProduct = async (formData) => {
    try {
        const Option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/api/products/products`, Option);
        const json = await response.json();
        return json;
    } catch (error) {
        return (error);
    }
}

// Update user with feedback
export async function updateUserWithFeedBack(userId, formData) {
    console.log(formData);
    try {
        const Options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/api/users/?userId=${userId}`, Options)
        const json = await response.json();
        return json;
    } catch (error) {
        return (error);
    }
}


// Client request for posting the data as reservation.
export const addReservation = async (formData) => {
    try {
        const Option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/api/reservation/reservation`, Option);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        return (error);
    }
}


// Reservation related data fetch
export const getReservationAccordingToUser = async (formData) => {
    const response = await fetch(`${baseUrl}/api/reservation/reservation`)
    const json = await response.json();
    return json;
}


export async function deleteReservation (userId){
        try{
        const Options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(`${baseUrl}/api/reservation/reservation/?userId=${userId}`, Options)
        const json = await response.json(); 
        return json;
    }catch(error){
        return(error); 
    }
    
}


