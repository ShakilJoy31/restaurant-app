import { OrderFoodStore } from '../userStore';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FoodProduct from '../components/FoodProduct';
import { TypeAnimation } from 'react-type-animation'
import FoodProductStyle from '../components/FoodProductStyle.module.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
// const stripePromise = pk_test_51L183oGvk3EOuY0mCvwv4Q99sX08KsLiOHlvQU09QRHe0UGqRZpUBRNMoCD6xirbdwHZnfHHvYmr2II8zPMqq28t00AAseWdFL

const stripePromise = loadStripe('pk_test_51L183oGvk3EOuY0mCvwv4Q99sX08KsLiOHlvQU09QRHe0UGqRZpUBRNMoCD6xirbdwHZnfHHvYmr2II8zPMqq28t00AAseWdFL');

const Payment = () => {
    const { product, setProduct } = OrderFoodStore.useContainer();
    const [amountToPay, setAmountToPay] = useState()
    const router = useRouter();
    useEffect(() => {
        if (product.length == 0) {
            router.push('/');
        }
        else{
            let totalPrice = 0; 
            product.map(singleProduct => {
                totalPrice = totalPrice + singleProduct.price; 
            })
            setAmountToPay(totalPrice); 
        }
    }, [])
    console.log(product);
    return (
        <div style={{
            backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat"
        }} className=''>
            <div>
                <h1 className='flex justify-center text-5xl text-error'>Payment Section</h1>
                <div className="min-h-screen hero">

                    <div className="flex-col hero-content lg:flex-row-reverse gap-x-6">

                        {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> */}

                        <div>
                            <div className="shadow-xl card w-96 bg-base-100">
                                <div className="card-body">
                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm amountToPay={amountToPay}/>
                                    </Elements>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-4xl text-red-400">Let's have a look at the food.</h1>
                            <TypeAnimation
                                sequence={[
                                    "You're going to pay.",
                                    1000,
                                    'You are going to eat.',
                                    500,
                                    'You are going to be satisfied',
                                    1000,
                                    () => {
                                    }
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '2rem', color: '#1A120B' }}
                            />
                            <br></br>
                            {/* style={{
                                                backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                                backgroundSize: "100%",
                                                backgroundRepeat: "repeat"
                                            }} */}

                            {
                                product?.length > 1 &&
                                <div>
                                    <div className='grid grid-cols-2 gap-2 lg:grid-cols-6 md:grid-cols-4'>
                                    {
                                        product?.map(singleUpcomingFood =>
                                            <div>
                                                <div className={`h-32 shadow-2xl w-28 ${FoodProductStyle.paymentAbleFood}`}>
                                                    <figure><img className="w-full h-24" src={singleUpcomingFood.photo} alt="Shoes" /></figure>
                                                    <div>
                                                        <div className="">
                                                            <div className="flex items-center justify-center">
                                                                <div>
                                                                    <small className=""> <span className=""> {singleUpcomingFood.name?.length > 7 ? singleUpcomingFood.name.slice(0, 15) + '...' : singleUpcomingFood.name} </span></small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                </div>
                            }


                            {/* For single order */}

                            {
                                product?.length == 1 &&
                                <div>
                                    <div className={`h-48 shadow-2xl w-48 ${FoodProductStyle.paymentAbleFood}`}>
                                        <figure><img className="w-full h-[160px]" src={product[0].photo} alt="Shoes" /></figure>
                                        <div>
                                            <div className="">
                                                <div className="flex items-center justify-center">
                                                    <div>
                                                        <small className="text-xl"> <span className=""> {product[0].name?.length > 7 ? product[0]?.name?.slice(0, 15) + '...' : product[0].name} </span></small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                // <div style={{
                                // }}>
                                //     <div className="w-64 h-48 shadow-2xl">
                                //         <figure><img className="w-full h-48" src={product[0].photo} alt="Shoes" /></figure>
                                //         <div>
                                //             <div className="">
                                //                 <div className="flex items-center justify-center gap-x-4">

                                //                     <div>
                                //                         <small className=""> <span className=""> {product[0].name} </span></small>
                                //                     </div>
                                //                 </div>

                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;