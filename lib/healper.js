const baseUrl = 'http://localhost:3000'; 
// Get all the user from the database

export const getUser = async () =>{
    const response = await fetch(`${baseUrl}/api/users`)
    const json = await response.json(); 
    return json;
}

export const getProduct = async () =>{
    const response = await fetch(`${baseUrl}/api/products/products`)
    const json = await response.json(); 
    return json;
}



export const addUser = async (formData) =>{
    try{
        const Option = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/api/users`, Option); 
        const json = await response.json(); 
        return json; 
    }catch(error){
        return (error); 
    }
}

export const postProduct = async (formData) =>{
    try{
        const Option = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/api/products/products`, Option); 
        const json = await response.json(); 
        return json; 
    }catch(error){
        return (error); 
    }
}