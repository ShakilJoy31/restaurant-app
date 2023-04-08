import { OrderFoodStore } from '../userStore';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FoodProduct from '../components/FoodProduct';
import { TypeAnimation } from 'react-type-animation'
import FoodProductStyle from '../components/FoodProductStyle.module.css';
import FoodCheckout from './FoodCheckout';


const Order = () => {
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
    return (
        <div style={{
            backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat"
        }} className=''>
            <div>
                <h1 className='flex justify-center py-4 text-5xl text-white'>Food Order Section</h1>
                <div className="flex justify-center py-4">
                    <div className="flex-col hero-content lg:flex-row-reverse gap-x-16">
                        <div className='ml-6'>
                            <FoodCheckout></FoodCheckout>
                        </div>

                        <div>
                            <h1 className="text-4xl text-red-400">Have a look at the food.</h1>
                            <TypeAnimation
                                sequence={[
                                    "Order the food.",
                                    1000,
                                    "We'll handle the rest.",
                                    1000,
                                    'Enjoy the food!',
                                    1000,
                                    'Thank you...',
                                    1000,
                                    () => {
                                    }
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '1.5rem', color: 'black' }}
                            />
                            <br></br>
                            {
                                product?.length > 1 &&
                                <div>
                                    <div className='grid grid-cols-2 gap-2 lg:grid-cols-4 md:grid-cols-3'>
                                    {
                                        product?.map((singleUpcomingFood, index) =>
                                            <div key={index}>
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
                                        <figure><img className="w-full h-[160px]" src={product[0].photo} alt="" /></figure>
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
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;