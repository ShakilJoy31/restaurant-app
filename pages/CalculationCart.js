import { useState } from 'react';
import { useEffect } from 'react';
import CartFoodPhoto from './CartFoodPhoto';
import movingPara from './CalculationCart.module.css'
import { useRouter } from 'next/router';
const CalculationCart = ({ product }) => {
    let [totalFoodPrice, setTotalFoodPrice] = useState(0);
    let [allName, setAllName] = useState([]);
    let name = [];
    const router = useRouter();
    useEffect(() => {
        let totalPrice = 0
        product.map(food => {
            totalPrice = totalPrice + food?.price;
            setTotalFoodPrice(totalPrice);
            name.push(food.name);
            setAllName(name);
            // const allFoodName = name.push(food?.name);
            // setAllName(allFoodName);
        })
    }, [product])

    const handleReadyToPay = () => {
        router.push("/payment")
        console.log('Button for payment is clicked');
    }

    return (
        <div>
            <div>
                <div className="">
                    <div className="collapse-title bg-accent text-primary-content">
                        <div className=''>
                            <div className='flex items-center justify-between'>
                                <div className='ml-8'>
                                    <p className='text-2xl'><span className='mr-4 text-rose-600'>Food List: </span> {
                                        allName.map((food, index) => <span className='text-white'>{food}<span>{(allName.length - 1) === index ? '' : ', '}</span></span>)
                                    }</p>
                                    <p className='text-2xl'><span className='mr-4 text-rose-600'>Total: </span> {totalFoodPrice} Taka Only</p>

                                    <p className='text-2xl'><span className='mr-4 text-rose-600'>Tax: </span> <span className=''>7%</span> of total</p>

                                    <p className='text-2xl'> <span className='mr-4 text-rose-600'>Grand Total: </span><span className=''>{totalFoodPrice + (totalFoodPrice * (7 / 100))}</span> Taka Only</p>
                                </div>
                                <div className=''>
                                    <button onClick={handleReadyToPay} className='text-xl normal-case btn btn-primary'>Pay {totalFoodPrice + (totalFoodPrice * (7 / 100))} Now</button>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center collapse-content bg-accent text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content hover:cursor-pointer">

                        {/* <span className='pt-2 text-2xl'>Pay {totalFoodPrice + (totalFoodPrice * (7 / 100))} Now</span> */}
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default CalculationCart;