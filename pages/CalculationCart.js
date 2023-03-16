import { useState } from 'react';
import { useEffect } from 'react';
import CartFoodPhoto from './CartFoodPhoto';
import movingPara from './CalculationCart.module.css'
import { useRouter } from 'next/router';
import { TbCurrencyTaka } from 'react-icons/tb';
import { OrderFoodStore } from '../userStore';

const CalculationCart = ({ product }) => {
    let [totalFoodPrice, setTotalFoodPrice] = useState(0);
    let [allName, setAllName] = useState([]);
    const { setProduct } = OrderFoodStore.useContainer();
    let name = [];
    const router = useRouter();
    useEffect(() => {
        let totalPrice = 0;
        product?.map(food => {
            totalPrice = totalPrice + food?.price;
            setTotalFoodPrice(totalPrice);
            name.push(food.name);
            setAllName(name);
        })
    }, [product])

    const handlePayment = () => {
        router.push("/order")
        setProduct(product)
    }

    return (
        <div>
            <div className="pb-4 overflow-x-auto">
                <table style={{
                    transitionDuration: '300ms'
                }} className="table w-full">

                    <thead>
                        <tr>
                            <th className='text-xl normal-case text-accent'> <span className=''> Food List </span></th>
                            <th className='text-xl normal-case text-accent'> <span className='flex justify-center'> Total Taka </span></th>
                            <th className='text-xl normal-case text-accent'> <span className='flex justify-center'> Grand Total </span></th>
                            <th className='text-xl normal-case text-accent'> <span className=''> Payment </span></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <p className='text-xl'>
                                    {
                                        allName.map((food, index) => <span key={index} className=''> <span className='mr-2'>{index+1}. </span> {food}<span>{(allName.length - 1) === index ? '' : ', '}
                                        <br />
                                        </span></span>)
                                    }
                                </p>
                            </td>

                            <td><p className='flex justify-center text-xl'> <span className='mr-2 text-error'>{product?.length !== 0 ? totalFoodPrice : '0'}</span> Taka Only</p>
                            </td>

                            <td><span className='flex justify-center text-xl'>{product?.length !== 0 ? (totalFoodPrice + (totalFoodPrice * (7 / 100))).toFixed(2) : '0'} taka </span> <span className='flex items-center justify-center text-error'>(included 7% tax)</span></td>

                            <td>
                            <button style={{
                                backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat"
                            }} onClick={handlePayment} className='text-xl normal-case border-0 btn btn-primary'>Order Now<span></span></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CalculationCart;