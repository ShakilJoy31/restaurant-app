import { UserStore } from '../userStore';
import { useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import CalculationCart from './CalculationCart';
import { useRouter } from 'next/router';
import { BsPlusSquareFill } from 'react-icons/bs';
import { BsFileMinusFill } from 'react-icons/bs';
const Cart = () => {
    const [product, setProduct] = useState([]);
    const [productWithQuantity, setProductWithQuantity] = useState([]);
    const [isCartFoodModal, setIsCartFoodModal] = useState(false);
    const [id, setId] = useState('');
    const [price, setPrice] = useState(0);
    const router = useRouter();
    useEffect(() => {
        const getSpecificFood = JSON.parse(localStorage.getItem('food'));
        setProduct(getSpecificFood);
        setProductWithQuantity(getSpecificFood); 
    }, [Cart])
    const handleDeleteFoodFromCart = () => {
        const restFood = product.filter(singleFood => singleFood._id !== id);
        if (restFood) {
            localStorage.setItem('food', JSON.stringify(restFood))
        }
        setProduct(restFood);
    }
    
    return (
        <div className='mx-12'>
            <h1 className='flex justify-center mb-8 text-4xl font-bold'>Food, you have added to the cart</h1>
            <div>
                {
                    product?.length > 0 ? <div className="w-full overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th> <span className='flex justify-center'> Sl No.</span></th>
                                    <th> <span className='flex justify-center'> Name</span></th>
                                    <th> <span className='flex justify-center'> Photo</span></th>
                                    <th> <span className='flex justify-center'> Price</span></th>
                                    <th> <span className='flex justify-center'> Action</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product?.map((food, index) => <tr key={index}>
                                        <th> <span className='flex justify-center'>{index + 1}</span> </th>
                                        <td><span className='flex justify-center'>{food.name}</span></td>
                                        <td>
                                            <div className='flex justify-center'>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="w-16 h-16 mask mask-squircle">
                                                            <img src={food.photo} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                        <span className='flex justify-center'>{food.price}</span>
                                        </td>
                                        <th>
                                            <div className='flex justify-center'>
                                                <label onClick={() => {
                                                    setIsCartFoodModal(true);
                                                    setId(food._id)
                                                }} htmlFor="my-modal-4" className="btn"><span><AiTwotoneDelete color={'#9A1663'} size={30}></AiTwotoneDelete></span></label>
                                            </div>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th> <span className='flex justify-center'> Sl No.</span></th>
                                    <th> <span className='flex justify-center'> Name</span></th>
                                    <th> <span className='flex justify-center'> Photo</span></th>
                                    <th> <span className='flex justify-center'> Price</span></th>
                                    <th> <span className='flex justify-center'> Action</span></th>
                                </tr>
                            </tfoot>

                        </table>
                    </div> : <div>
                        <div className='flex items-center justify-center gap-x-4'>
                            <p className='flex justify-center text-2xl text-error'>Waiting for you to add some food to the cart---{'>'}</p>
                            <button className='text-red-500 btn btn-square loading'></button>
                            <button style={{
                                backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} onClick={() => router.push('/')} className="btn btn-error btn-outline hover:cursor-pointer"> <span className='text-black normal-case border-0'>Let Me Add</span> </button>
                        </div>
                    </div>
                }




                {/* Modal for confirm delete */}
                {
                    isCartFoodModal && <div>
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="cursor-pointer modal">
                            <label className="relative modal-box" htmlFor="">
                                <h3 style={{
                                    backgroundImage: "linear-gradient(45deg, #FEA1BF, #BFEAF5)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                    webkitBackgroundClip: "text",
                                    webkitTextFillColor: "transparent",
                                    mozBackgroundClip: "text",
                                    mozTextFillColor: "transparent"
                                }} className="flex justify-center mb-6 text-3xl font-bold text-red-600">Are you sure to delete?</h3>
                                <div className='flex justify-center gap-x-8'>
                                    <button
                                        onClick={() => setIsCartFoodModal(false)}
                                        className='btn btn-success btn-outline w-[140px]'>No</button>
                                    <button onClick={() => {
                                        handleDeleteFoodFromCart()
                                        setIsCartFoodModal(false)

                                    }} className='w-[140px] btn btn-error btn-outline'>Yes</button>
                                </div>
                            </label>
                        </label>
                    </div>
                }
                <h1 className='flex justify-center my-4 text-4xl font-bold lg:my-12 md:my-8'>Payment Sumery</h1>
                <CalculationCart product={product}></CalculationCart>
            </div>
        </div>
    );
};

export default Cart;