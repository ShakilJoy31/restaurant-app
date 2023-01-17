import { useState } from 'react';
import { useEffect } from 'react';
import CartFoodPhoto from './CartFoodPhoto';
import movingPara from './CalculationCart.module.css'
import { useRouter } from 'next/router';
import { TbCurrencyTaka } from 'react-icons/tb';
const CalculationCart = ({ product }) => {
    let [totalFoodPrice, setTotalFoodPrice] = useState(0);
    let [allName, setAllName] = useState([]);
    let [moreFoodName, setMoreFoodName] = useState(false);
    let name = [];
    const router = useRouter();
    useEffect(() => {
        let totalPrice = 0;
        product?.map(food => {
            totalPrice = totalPrice + food?.price;
            setTotalFoodPrice(totalPrice);
            name.push(food.name);
            if (!moreFoodName) {
                setAllName(name.slice(0, 3));
                console.log(moreFoodName, 'in if')
            }
            else {
                setAllName(name);
                console.log(moreFoodName, 'in else')

            }
            // const allFoodName = name.push(food?.name);
            // setAllName(allFoodName);
        })
    }, [product, moreFoodName])

    const handlePayment = () => {
        router.push("/payment")
        console.log('Button for payment is clicked');
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

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
                                        allName.map((food, index) => <span className=''>{food}<span>{(allName.length - 1) === index ? '' : ', '}
                                            {
                                                (allName.length < 4) ? '' : <br />
                                            }
                                        </span></span>)
                                    }

                                    {
                                        moreFoodName ? <span onClick={() => setMoreFoodName(!moreFoodName)} className='text-error hover:cursor-pointer'>See Less</span> : <span onClick={() => setMoreFoodName(!moreFoodName)} className='text-accent hover:cursor-pointer'> and More</span>
                                    }
                                </p>

                            </td>

                            <td><p className='flex justify-center text-xl'> <span className='mr-2 text-error'>{totalFoodPrice}</span> Taka Only</p>
                            </td>

                            <td><span className='flex justify-center text-xl'>{(totalFoodPrice + (totalFoodPrice * (7 / 100))).toFixed(2)} taka </span> <span className='flex items-center justify-center text-error'>(included 7% tax)</span></td>

                            <td><button style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} onClick={handlePayment} className='text-xl normal-case border-0 btn btn-primary'>Pay {(totalFoodPrice + (totalFoodPrice * (7 / 100))).toFixed(2)} <span> <TbCurrencyTaka size={25}></TbCurrencyTaka> </span></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CalculationCart;




// {/* <div>
//             <div>
//                 <div className="">
//                     <div className="collapse-title bg-accent text-primary-content">
//                         <div className=''>
//                             <div className='flex items-center justify-between'>
//                                 <div className='ml-8'>
//                                     <p className='text-2xl'><span className='mr-4 text-rose-600'>Food List: </span> {
//                                         allName.map((food, index) => <span className='text-white'>{food}<span>{(allName.length - 1) === index ? '' : ', '}</span></span>)
//                                     }</p>
//                                     <p className='text-2xl'><span className='mr-4 text-rose-600'>Total: </span> {totalFoodPrice} Taka Only</p>

//                                     <p className='text-2xl'><span className='mr-4 text-rose-600'>Tax: </span> <span className=''>7%</span> of total</p>

//                                     <p className='text-2xl'> <span className='mr-4 text-rose-600'>Grand Total: </span><span className=''>{totalFoodPrice + (totalFoodPrice * (7 / 100))}</span> Taka Only</p>
//                                 </div>
//                                 <div className=''>
//                                     <button onClick={handleReadyToPay} className='text-xl normal-case btn btn-primary'>Pay {totalFoodPrice + (totalFoodPrice * (7 / 100))} Now</button>
//                                 </div>
//                             </div>
//                             <div>

//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex justify-center collapse-content bg-accent text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content hover:cursor-pointer">

//                         {/* <span className='pt-2 text-2xl'>Pay {totalFoodPrice + (totalFoodPrice * (7 / 100))} Now</span> */}
//                     </div>
//                     <br />
//                     <br />
//                 </div>
//             </div>
//         </div> */}