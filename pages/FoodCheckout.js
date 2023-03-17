import React, { useState } from 'react';
import { MdError, MdFileDownloadDone } from 'react-icons/md';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import FoodProductStyle from '../components/FoodProductStyle.module.css';

const FoodCheckout = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [orderConfirmationModal, setOrderConfirmationModal] = useState(false);
    const [orderConfirmationModalInfo, setOrderConfirmationModalInfo] = useState(false);

    const handleConfirmOrder = () => {
        if (name && number && email && address) {
            setOrderConfirmationModal(true);
        }
        else {
            setOrderConfirmationModalInfo(true);
        }

        setTimeout(() => {
            setOrderConfirmationModal(false);
            setOrderConfirmationModalInfo(false);
        }, 3500);
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
                                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='What is your name' className="w-full bg-black input focus:outline-none focus:border-white" />

                                <input onChange={(e) => setNumber(e.target.value)} type="number" placeholder='Update your phone number' className="w-full my-4 bg-black input focus:outline-none focus:border-white" />


                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Update your email here' className="w-full bg-black input focus:outline-none focus:border-white" />

                                <input onChange={(e) => setAddress(e.target.value)} type='text' placeholder='Type your address' className="w-full my-4 bg-black input focus:outline-none focus:border-white" />

                                <label onClick={handleConfirmOrder} htmlFor="confirmOrderFoodModal" className={`w-full text-xl normal-case border-0 btn ${FoodProductStyle.confirmOrder}`}>Confirm Order</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {
                ( orderConfirmationModal || orderConfirmationModalInfo) && <div>
                    <input type="checkbox" id="confirmOrderFoodModal" className="modal-toggle" />
                    <div className="modal">
                        <div style={{
                            backgroundColor: '#19A7CE',
                            borderRadius: '5px',
                            width: '550px'
                        }} className="relative modal-box">
                            <label htmlFor="confirmOrderFoodModal" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>

                            {
                                orderConfirmationModalInfo ? <div className='mt-4'>
                                    <h3 className="flex justify-center text-2xl font-bold text-red-700"> <span className='mr-4 '><MdError size={35}></MdError></span>User information is required!</h3>
                                    <p className="flex justify-center py-4 text-xl text-black">Fill the client information up first.</p>
                                    <p className='flex justify-center text-black'>Thanks for your patience.</p>
                                </div> : <div className='mt-4'>
                                    <h3 className="flex justify-center text-2xl font-bold text-black"> <span className='mr-4 '><RiCheckboxCircleFill size={35}></RiCheckboxCircleFill></span> Your order is successfully placed.</h3>
                                    <p className="flex justify-center py-4 text-xl text-black">We will reach the food for you <span className='ml-2 text-2xl text-white'>ASAP!</span></p>
                                    <p className='flex justify-center text-black'>Thanks for your patience.</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default FoodCheckout;