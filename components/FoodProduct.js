import { useEffect, useState } from 'react';
import { getProduct } from '../lib/healper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
// import { UserCart } from '../userStore';
const FoodProduct = () => {
    const [foodProducts, setFoodProducts] = useState([]);
    const [cartClickedFood, setCartClickedFood] = useState([]);
    const [isRecipeModal, setIsRecipeModal] = useState([]);
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
        setIsRecipeModal([getFood.name, getFood.description]);
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
    return (
        <div>
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
                                <h3 className="flex justify-center text-3xl font-bold text-accent">Recipe for {isRecipeModal[0]}</h3>
                                <p className="flex justify-center py-4 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut odio corporis, sapiente praesentium officiis, vel tenetur tempora recusandae dolorum saepe possimus enim at! Doloribus velit dolores quae recusandae veniam!</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-5" className="btn btn-error">Close</label>
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