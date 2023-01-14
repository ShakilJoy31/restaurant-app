import { useEffect, useState } from 'react';
import { getProduct } from '../lib/healper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
// import {foodProductStyle} from './FoodProductStyle.module.css'; 
// import { UserCart } from '../userStore';
const FoodProduct = () => {
    const [foodProducts, setFoodProducts] = useState([]);
    const [cartClickedFood, setCartClickedFood] = useState([]);
    const [isRecipeModal, setIsRecipeModal] = useState([]);
    const [thankYou, setThankYou] = useState(null);
    const [feedBack, setFeedback] = useState('');
    // const { cart, setCart } = UserCart.useContainer();

    useEffect(() => {
        getProduct().then(res => setFoodProducts(res))
    }, [])
    const handleOrderNowButton = (id) => {
        const getFood = foodProducts.find(product => product._id === id);
        console.log(getFood);
    }
    const handleRecipe = (id) => {
        const getFood = foodProducts.find(product => product._id === id);
        setIsRecipeModal([getFood?.name, getFood?.description, getFood?.photo, getFood._id]);
        console.log(getFood);
    }
    let foodInTheCart;
    const handleAddToCart = (id) => {
        const getFood = foodProducts.find(product => product._id === id);
        getFood && setCartClickedFood(getFood);
        const isFoodActive = JSON.parse(localStorage.getItem('food'));
        if (!isFoodActive) {
            foodInTheCart = [];
        }
        else {
            foodInTheCart = isFoodActive;
        }
        const isFoodPresentAtLocalStorage = isFoodActive.find(foodId => foodId._id === id);
        if (!isFoodPresentAtLocalStorage) {
            foodInTheCart.push(getFood);
            localStorage.setItem('food', JSON.stringify(foodInTheCart));
            toast.success(getFood?.name + ' is added to the cart')
        }
        else {
            toast.error(getFood?.name + ' is already exist to the cart!')
        }
    }
    const handleSubmitFeedBack = (id) => {
        const getFood = foodProducts.find(product => product._id === id);
        const myTimeout = setTimeout(() => {
            setThankYou(getFood)
        }, 50);
        if (myTimeout) {
            setTimeout(() => {
                setThankYou(null)
            }, 2500);
        }
    }
    return (
        <div id='#availableFood'>
            <h1 className='flex justify-center mb-8 text-5xl font-bold text-accent'>Available Food</h1>
            <div>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 gap-6 mx-4 lg:grid-cols-3 md:grid-cols-2'>
                        {
                            foodProducts.map(food => <div className="border shadow-2xl card w-96 border-accent">
                                <figure><img className='h-[300px] w-full' src={food.photo} alt="Foods" /></figure>
                                <div className="card-body">
                                    <h2 className="flex justify-center text-2xl">{food.name}</h2>
                                    <p className='flex justify-center'>{food.price}</p>
                                    <p className='flex justify-center'>{food.description}</p>
                                    <div className="justify-end card-actions">
                                        <button onClick={() => handleOrderNowButton(food._id)} className="w-full text-xl normal-case btn btn-accent btn-outline">Order Now</button>
                                    </div>
                                    <div className='flex justify-between'>

                                        <label onClick={() => handleRecipe(food._id)} htmlFor="my-modal-5" className="w-full normal-case btn btn-info btn-outline btn-sm">Show Me The Recipe</label>

                                        <button onClick={() => handleAddToCart(food._id)} style={{
                                            position: 'absolute',
                                            top: '5px',
                                            right: '5px'
                                        }} className='text-white normal-case btn btn-error btn-sm'>Add to Cart</button>

                                        <button style={{
                                            position: 'absolute',
                                            top: '5px',
                                            left: '5px'
                                        }} className='text-white normal-case btn btn-success btn-sm'>
                                            Ratings: <span className='mx-2 text-red-600'> 4.5</span>
                                            {/* <AiFillStar></AiFillStar>
                                            <AiFillStar></AiFillStar>
                                            <AiFillStar></AiFillStar>
                                            <AiFillStar></AiFillStar>
                                            <BsStarHalf></BsStarHalf> */}
                                        </button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div>
                {
                    isRecipeModal && <div>
                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="modal">
                            <div className="w-11/12 max-w-5xl modal-box">
                                <h3 style={{
                                    backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                    webkitBackgroundClip: "text",
                                    webkitTextFillColor: "transparent",
                                    mozBackgroundClip: "text",
                                    mozTextFillColor: "transparent"
                                }} className={`flex justify-center text-3xl font-bold text-accent`}>Recipe for {isRecipeModal[0]}</h3>
                                <div className='flex justify-center mt-6'>
                                    <div className='grid grid-cols-3 gap-4 lg:gap-x-10 md:gap-x-6'>
                                        <img className='w-20 p-2 border rounded-md lg:h-32 md:h-32 lg:w-36 md:w-32 border-accent' src={isRecipeModal[2]} alt="Recipe Image" />
                                        <img className='w-20 p-2 border rounded-md lg:h-32 md:h-32 lg:w-36 md:w-32 border-accent' src={isRecipeModal[2]} alt="Recipe Image" />
                                        <img className='w-20 p-2 border rounded-md lg:h-32 md:h-32 lg:w-36 md:w-32 border-accent' src={isRecipeModal[2]} alt="Recipe Image" />
                                    </div>
                                </div>
                                <p style={{
                                    backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                    webkitBackgroundClip: "text",
                                    webkitTextFillColor: "transparent",
                                    mozBackgroundClip: "text",
                                    mozTextFillColor: "transparent"
                                }} className="flex justify-center px-4 py-4 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut odio corporis, sapiente praesentium officiis, vel tenetur tempora recusandae dolorum saepe possimus enim at! Doloribus velit dolores quae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut odio corporis, sapiente praesentium officiis, vel tenetur tempora recusandae dolorum saepe possimus enim at! Doloribus velit dolores quae</p>
                                <div className='flex items-end justify-between modal-action'>
                                    <div className='w-80'>
                                        <div className="w-full max-w-xs form-control">
                                            <label className="label">
                                                <span style={{
                                                    backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                                    backgroundSize: "100%",
                                                    backgroundRepeat: "repeat",
                                                    webkitBackgroundClip: "text",
                                                    webkitTextFillColor: "transparent",
                                                    mozBackgroundClip: "text",
                                                    mozTextFillColor: "transparent"
                                                }} className="hidden text-xl label-text lg:block md:block">Some Feedback if any...</span>
                                                {
                                                    thankYou?._id === isRecipeModal[3] ? <span style={{
                                                        backgroundImage: "linear-gradient(45deg, aliceblue, yellow)",
                                                        backgroundSize: "100%",
                                                        backgroundRepeat: "repeat",
                                                        webkitBackgroundClip: "text",
                                                        webkitTextFillColor: "transparent",
                                                        mozBackgroundClip: "text",
                                                        mozTextFillColor: "transparent"
                                                    }} className="text-xl cursor-pointer label-text-alt">Thank You</span> : <span onClick={() => handleSubmitFeedBack(isRecipeModal[3])} className="text-2xl text-red-500 cursor-pointer label-text-alt hover:text-accent">{feedBack ? 'Submit' : ''}</span>
                                                }
                                            </label>
                                            
                                                <input onChange={(e) => setFeedback(e.target.value)} type="text" placeholder='Type your precious review' className="w-full focus:outline-none input border-accent" />
                                            
                                            {/* <input onChange={(e) => setFeedback(e.target.value)} type="text" placeholder='Type your precious review' className="w-full focus:outline-none input border-accent" value={(thankYou?._id === isRecipeModal[3]) ? 'Thank You for Your Feedback' : 'Type your precious review'} /> */}

                                        </div>
                                    </div>
                                    <label style={{
                                        backgroundImage: "linear-gradient(45deg, aliceblue, yellow )",
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat",
                                        // position:'absolute',
                                        // bottom:'20px',
                                        // right: '20px'
                                    }} htmlFor="my-modal-5" className="w-32 btn"> <span className='text-xl text-red-600'>Close</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default FoodProduct;