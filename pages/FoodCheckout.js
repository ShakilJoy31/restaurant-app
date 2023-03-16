import React, { useState } from 'react';
import FoodProductStyle from '../components/FoodProductStyle.module.css';

const FoodCheckout = () => {
    const [name, setName] = useState(''); 
    const [number, setNumber] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [address, setAddress] = useState(''); 

    const handleConfirmOrder = () =>{
        console.log(name, number, email, address); 
    }
    
    return (
        <div>
            <div style={{
                backgroundColor: '#19A7CE',
                borderRadius: '5px',
                width: '550px'
            }} className="shadow-xl">
                <div className="card-body">
                    <h1 className='flex justify-center mb-4 text-3xl text-white'>Type your information correctly.</h1>
                    <div>
                        <div className="flex justify-center">
                            <div>
                                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='What is your name' className="w-full bg-black input focus:outline-none focus:border-white" />

                                <input onChange={(e)=>setNumber(e.target.value)} type="number" placeholder='Update your phone number' className="w-full my-4 bg-black input focus:outline-none focus:border-white" />


                                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Update your email here' className="w-full bg-black input focus:outline-none focus:border-white" />

                                <input onChange={(e)=>setAddress(e.target.value)} type='text' placeholder='Type your address' className="w-full my-4 bg-black input focus:outline-none focus:border-white" />


                                <button onClick={handleConfirmOrder} className={`block w-full mx-auto text-xl normal-case border-0 btn ${FoodProductStyle.confirmOrder} mb-4`}> Confirm Order </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCheckout;