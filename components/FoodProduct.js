import { useEffect, useState } from 'react';
import { getProduct } from '../lib/healper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { TbCurrencyTaka } from 'react-icons/tb';
// updateUserWithFeedBack
import LoggedUserHome from './LoggedUserHome';
import { getUser } from './../lib/healper';
import { updateUserWithFeedBack } from './../lib/healper';
import FoodProductStyle from './FoodProductStyle.module.css';
import { useRouter } from 'next/router';
import { OrderFoodStore, UserFoodSearch } from '../userStore';
import Reservation from './Reservation';

const FoodProduct = () => {
    const [foodProducts, setFoodProducts] = useState([]);
    const [cartClickedFood, setCartClickedFood] = useState([]);
    const [isRecipeModal, setIsRecipeModal] = useState([]);
    const [thankYou, setThankYou] = useState(null);
    const [feedBack, setFeedback] = useState('');
    const [signedInUser, setSignedInUser] = useState([]);
    const [allFood, setAllFood] = useState([]);
    const [initFoodProduct, setInitFoodProduct] = useState(false);
    const { product, setProduct } = OrderFoodStore.useContainer();
    const {foodName, setFoodName} = UserFoodSearch.useContainer();  
    // const { cart, setCart } = UserCart.useContainer();
    // console.log(foodName);
    const router = useRouter();
    useEffect(() => {
        getProduct().then(res => {
            setAllFood(res); 
            setFoodProducts(res.slice(0,12));
            if(foodName){
                const searchFood = res.filter((food, index) => (food.name).toLowerCase().match(foodName));
                if(!searchFood){
                    setFoodProducts(res.slice(0,12));
                }
                else{
                    setFoodProducts(searchFood);
                }
            }
        })
    }, [foodName])
    
    const handleOrderNowButton = (id) => {
        const getFood = foodProducts.find(product => product._id === id);
        setProduct([getFood]);
        router.push('/payment')
    }
    const handleRecipe = (id) => {
        const getFood = foodProducts.find(product => product._id === id);
        setIsRecipeModal([getFood?.name, getFood?.description, getFood?.photo, getFood._id]);
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
        const isFoodPresentAtLocalStorage = isFoodActive?.find(foodId => foodId._id === id);
        if (!isFoodPresentAtLocalStorage) {
            foodInTheCart.push(getFood);
            localStorage.setItem('food', JSON.stringify(foodInTheCart));
            toast.success(getFood?.name + ' is added to the cart')
        }
        else {
            toast.error(getFood?.name + ' is already exist to the cart!')
        }
    }

    // Getting all the user from database.
    useEffect(() => {
        getUser().then(res => setSignedInUser(res));
    }, [signedInUser])

    const handleSubmitFeedBack = (id) => {
        toast.success('Feedback Submitted Successfully');
        const getFood = foodProducts.find(product => product._id === id);
        const myTimeout = setTimeout(() => {
            setThankYou(getFood)
        }, 50);
        if (myTimeout) {
            setTimeout(() => {
                setThankYou(null)
            }, 2500);
        }

        const localStorageUser = JSON.parse(localStorage.getItem('user'));
        const databaseUser = signedInUser.find(getUser => getUser.email === localStorageUser.email);

        if (localStorageUser && databaseUser) {
            const userWithFeedback = { name: databaseUser.name, phone: databaseUser.phone, email: databaseUser.email, password: databaseUser.password, photo: databaseUser.photo, feedback: feedBack, foodReviewedName: getFood.name, foodReviewedPhoto: getFood.photo }
            updateUserWithFeedBack(databaseUser._id, userWithFeedback).then(res => console.log(res));
        }
    }

    // Food category selection
    const [isChickenActive, setIsChickenActive] = useState(false); 
    const [isFishActive, setIsFishActive] = useState(false); 
    const [isBreakfast, setIsBreakfast] = useState(false); 
    const [isLunch, setIsLunch] = useState(false); 
    const [isDinner, setIsDinner] = useState(false); 
    const [isDrink, setIsDrink] = useState(false); 

    const handleSelectionButton = (getCatagory) =>{
        setIsChickenActive(true); 
        const getChicken = allFood.filter(chicken => chicken.catagory === getCatagory); 
        setFoodProducts(getChicken);
        if(getCatagory === 'chicken') {
            setIsChickenActive(true)
            setIsFishActive(false)
            setIsBreakfast(false)
            setIsLunch(false)
            setIsDinner(false)
            setIsDrink(false)
        } 
        else if(getCatagory === 'fish') {
            setIsChickenActive(false)
            setIsFishActive(true)
            setIsBreakfast(false)
            setIsLunch(false)
            setIsDinner(false)
            setIsDrink(false)
        }
        else if(getCatagory === 'breakfast') {
            setIsChickenActive(false)
            setIsFishActive(false)
            setIsBreakfast(true)
            setIsLunch(false)
            setIsDinner(false)
            setIsDrink(false)
        }
        else if(getCatagory === 'lunch') {
            setIsChickenActive(false)
            setIsFishActive(false)
            setIsBreakfast(false)
            setIsLunch(true)
            setIsDinner(false)
            setIsDrink(false)
        }
        else if(getCatagory === 'dinner') {
            setIsChickenActive(false)
            setIsFishActive(false)
            setIsBreakfast(false)
            setIsLunch(false)
            setIsDinner(true)
            setIsDrink(false)
        }
        else if(getCatagory === 'drink') {
            setIsChickenActive(false)
            setIsFishActive(false)
            setIsBreakfast(false)
            setIsLunch(false)
            setIsDinner(false)
            setIsDrink(true)
        }
    }
    const handleInitFoodProduct = () =>{
        setInitFoodProduct(!initFoodProduct);
        setIsChickenActive(false)
        setIsFishActive(false)
        setIsBreakfast(false)
        setIsLunch(false)
        setIsDinner(false)
        setIsDrink(false)
        if(!initFoodProduct){
            setFoodProducts(allFood);
        }
        else{
            setFoodProducts(allFood.slice(0,12)); 
        }
        console.log(initFoodProduct); 
    }
    return (
        <div>
            <div className='mb-8'>
                <LoggedUserHome></LoggedUserHome>
            </div>

            <div id='#availableFood'>
                <h1 style={{
                    backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                    mozBackgroundClip: "text",
                    mozTextFillColor: "transparent"
                }} className='flex justify-center text-5xl'>Available Food</h1>
                {/* Selection section */}



                <div className=''>

                    <div className={`${FoodProductStyle?.forSticky} my-8 md:mx-32 lg:mx-36 mx-4`}>
                        <div className={`w-full lg:h-16 md:h-16 h-full text-primary-content ${FoodProductStyle?.selectionCart} rounded-lg`}>
                            <div className="grid justify-around px-4 lg:flex">
                                <button onClick={()=>handleSelectionButton('chicken')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isChickenActive ? FoodProductStyle?.activeButton : ''}`}> <span className={` ${isChickenActive ? 'text-black text-xl' : 'text-white'}`}>Chicken</span>
                                </button>

                                <button onClick={()=>handleSelectionButton('fish')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isFishActive ? FoodProductStyle?.activeButton : ''}`}> <span className={` ${isFishActive ? 'text-black text-xl' : 'text-white'}`}>Fish</span>
                                </button>
                                <button onClick={()=>handleSelectionButton('breakfast')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isBreakfast ? FoodProductStyle?.activeButton : ''}`}> <span className={` ${isBreakfast ? 'text-black text-xl' : 'text-white'}`}>Breakfast</span>
                                </button>
                                <button onClick={()=>handleSelectionButton('lunch')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isLunch ? FoodProductStyle?.activeButton : ''}`}> <span  className={` ${isLunch ? 'text-black text-xl' : 'text-white'}`}>Lunch</span>
                                </button>
                                <button onClick={()=>handleSelectionButton('dinner')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isDinner ? FoodProductStyle.activeButton : ''}`}> <span className={` ${isDinner ? 'text-black text-xl' : 'text-white'}`}>Dinner</span>
                                </button>
                                <button onClick={()=>handleSelectionButton('drink')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isDrink ? FoodProductStyle.activeButton : ''} mb-2 lg:mb-2 md:mb-2`}> <span className={` ${isDrink ? 'text-black' : 'text-white'}`}>Drinks & Beverage</span>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* For mobile section */}
                    {/* <div className={`${FoodProductStyle?.forSticky} my-8 md:mx-32 lg:mx-36 lg:hidden block`}>
                        <div className={`w-full h-16 text-primary-content ${FoodProductStyle?.selectionCart} rounded-lg`}>
                            <div className="flex justify-around px-4">
                                <button onClick={()=>handleSelectionButton('chicken')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isChickenActive ? FoodProductStyle?.activeButton : ''}`}> <span className={` ${isChickenActive ? 'text-black text-xl' : 'text-white'}`}>Chicken</span>
                                </button>

                                <button onClick={()=>handleSelectionButton('fish')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isFishActive ? FoodProductStyle?.activeButton : ''}`}> <span className={` ${isFishActive ? 'text-black text-xl' : 'text-white'}`}>Fish</span>
                                </button>
                                <button onClick={()=>handleSelectionButton('breakfast')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isBreakfast ? FoodProductStyle?.activeButton : ''}`}> <span className={` ${isBreakfast ? 'text-black text-xl' : 'text-white'}`}>Breakfast</span>
                                </button>
                                <button onClick={()=>handleSelectionButton('lunch')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isLunch ? FoodProductStyle?.activeButton : ''}`}> <span  className={` ${isLunch ? 'text-black text-xl' : 'text-white'}`}>Lunch</span>
                                </button>
                                <button onClick={()=>handleSelectionButton('dinner')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isDinner ? FoodProductStyle.activeButton : ''}`}> <span className={` ${isDinner ? 'text-black text-xl' : 'text-white'}`}>Dinner</span>
                                </button>
                                <button onClick={()=>handleSelectionButton('drink')} style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`lg:w-32 md:w-32 w-80 mt-2 border-0 btn normal-case ${isDrink ? FoodProductStyle.activeButton : ''}`}> <span className={` ${isDrink ? 'text-black' : 'text-white'}`}>Drinks & Beverage</span>
                                </button>
                            </div>
                        </div>
                    </div> */}


                    {/* Food section */}
                    <div>
                        <div>
                            {
                                foodProducts.length == 0 && <h1 className='flex justify-center text-2xl text-red-500'>No food found with {foodName}</h1>
                            }
                        </div>
                    <div className='flex justify-center '>
                        <div className='grid grid-cols-1 gap-6 mx-4 lg:grid-cols-3 md:grid-cols-2'>
                            {
                                foodProducts?.map((food, index) => <div key={index} style={{
                                    backgroundImage: "linear-gradient(45deg, black, white)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className={`shadow-2xl card w-96 ${FoodProductStyle?.foodCard}`}>
                                    <figure><img className='h-[300px] w-full' src={food?.photo} alt="Foods" /></figure>
                                    <div className="card-body">
                                        <div className='flex justify-between'>
                                        <h2 className="text-2xl text-orange-300">{food?.name}</h2>

                                        <p style={{
                                            color: '#D09CFA'
                                        }} className='flex justify-end text-3xl'>{food?.price} <TbCurrencyTaka size={35}></TbCurrencyTaka></p>
                                        </div>

                                        <p style={{
                                            overflowY: 'scroll',
                                            msOverflowStyle: 'none',
                                            scrollbarWidth: 'none'
                                        }} className='h-28'> <span className='flex items-center justify-center'>{food?.description}</span></p>
                                        
                                        <label style={{
                                            backgroundImage: "linear-gradient(45deg, aliceblue, yellow )",
                                            backgroundSize: "100%",
                                            backgroundRepeat: "repeat",

                                            // backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                            // backgroundSize: "100%",
                                            // backgroundRepeat: "repeat",
                                        }} onClick={() => handleRecipe(food?._id)} htmlFor="my-modal-5" className="w-full normal-case border-0 btn btn-sm"> <span className='text-xl text-black'>Recipe & Feedback</span> </label>

                                        <div className='flex justify-between mt-4'>
                                        <button style={{
                                                position: 'absolute',
                                                bottom: '0',
                                                right:'0',
                                                left: '0',
                                                borderRadius:'15px',
                                                backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                                backgroundSize: "100%",
                                                backgroundRepeat: "repeat"
                                            }} onClick={() => handleOrderNowButton(food?._id)} className="text-xl normal-case border-0 btn"> <span className='text-white'>Order Now</span> </button>

                                            <button onClick={() => handleAddToCart(food?._id)} style={{
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
                    <div className='flex justify-center mt-8'>
                    <button onClick={handleInitFoodProduct} style={{
                        backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                    }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} w-96 hover:text-2xl`}> 
                    {
                        !initFoodProduct ? <span className={`flex items-center justify-center text-xl text-red-700`}> <span className='mr-2'>Explore All Items</span> <span className=''><AiOutlineArrowRight size={30} color={'black'}></AiOutlineArrowRight></span></span> : <span className={`flex items-center justify-center text-xl text-red-700`}> <span className='mr-2'>See Less Items</span></span>
                    }
                    </button>
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
                                        backgroundImage: "linear-gradient(45deg, #FEA1BF, #BFEAF5)",
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
                                                        // backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                                        backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
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

                                            </div>
                                        </div>
                                        <label style={{
                                            // backgroundImage: "linear-gradient(45deg, aliceblue, yellow )",
                                            // backgroundSize: "100%",
                                            // backgroundRepeat: "repeat",

                                            backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                            backgroundSize: "100%",
                                            backgroundRepeat: "repeat",
                                        }} htmlFor="my-modal-5" className="w-32 btn"> <span className='text-xl text-red-600 normal-case'>Close</span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }
                </div>
                <ToastContainer></ToastContainer>
            </div>
            {/* Upcoming Next.... */}
            <div>
                <Reservation></Reservation>
            </div>
        </div>
    );
};

export default FoodProduct;































































// import { useEffect, useState } from 'react';
// import { getProduct } from '../lib/healper';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AiFillStar } from 'react-icons/ai';
// import { BsStarHalf } from 'react-icons/bs';
// import { TbCurrencyTaka } from 'react-icons/tb';
// // updateUserWithFeedBack
// import LoggedUserHome from './LoggedUserHome';
// import UpcomingNextFood from './UpcomingNextFood';
// import { getUser } from './../lib/healper';
// import { updateUserWithFeedBack } from './../lib/healper';
// import FoodProductStyle from './FoodProductStyle.module.css';
// import { useRouter } from 'next/router';
// import { OrderFoodStore } from '../userStore';

// const FoodProduct = () => {
//     const [foodProducts, setFoodProducts] = useState([]);
//     const [cartClickedFood, setCartClickedFood] = useState([]);
//     const [isRecipeModal, setIsRecipeModal] = useState([]);
//     const [thankYou, setThankYou] = useState(null);
//     const [feedBack, setFeedback] = useState('');
//     const [signedInUser, setSignedInUser] = useState([]);
//     const { product, setProduct } = OrderFoodStore.useContainer();
//     // const { cart, setCart } = UserCart.useContainer();
//     const router = useRouter();
//     useEffect(() => {
//         getProduct().then(res => setFoodProducts(res))
//     }, [])
//     const handleOrderNowButton = (id) => {
//         const getFood = foodProducts.find(product => product._id === id);
//         router.push('/payment')
//         setProduct(getFood);
//     }
//     const handleRecipe = (id) => {
//         const getFood = foodProducts.find(product => product._id === id);
//         setIsRecipeModal([getFood?.name, getFood?.description, getFood?.photo, getFood._id]);
//     }
//     let foodInTheCart;
//     const handleAddToCart = (id) => {
//         const getFood = foodProducts.find(product => product._id === id);
//         getFood && setCartClickedFood(getFood);
//         const isFoodActive = JSON.parse(localStorage.getItem('food'));
//         if (!isFoodActive) {
//             foodInTheCart = [];
//         }
//         else {
//             foodInTheCart = isFoodActive;
//         }
//         const isFoodPresentAtLocalStorage = isFoodActive?.find(foodId => foodId._id === id);
//         if (!isFoodPresentAtLocalStorage) {
//             foodInTheCart.push(getFood);
//             localStorage.setItem('food', JSON.stringify(foodInTheCart));
//             toast.success(getFood?.name + ' is added to the cart')
//         }
//         else {
//             toast.error(getFood?.name + ' is already exist to the cart!')
//         }
//     }

//     // Getting all the user from database.
//     useEffect(() => {
//         getUser().then(res => setSignedInUser(res));
//     }, [signedInUser])

//     const handleSubmitFeedBack = (id) => {
//         toast.success('Feedback Submitted Successfully');
//         const getFood = foodProducts.find(product => product._id === id);
//         const myTimeout = setTimeout(() => {
//             setThankYou(getFood)
//         }, 50);
//         if (myTimeout) {
//             setTimeout(() => {
//                 setThankYou(null)
//             }, 2500);
//         }

//         const localStorageUser = JSON.parse(localStorage.getItem('user'));
//         const databaseUser = signedInUser.find(getUser => getUser.email === localStorageUser.email);

//         if (localStorageUser && databaseUser) {
//             const userWithFeedback = { name: databaseUser.name, phone: databaseUser.phone, email: databaseUser.email, password: databaseUser.password, photo: databaseUser.photo, feedback: feedBack, foodReviewedName: getFood.name, foodReviewedPhoto: getFood.photo }
//             updateUserWithFeedBack(databaseUser._id, userWithFeedback).then(res => console.log(res));
//         }
//     }

//     // Food category selection
//     const [isChickenActive, setIsChickenActive] = useState(false); 
//     const [isisFishActive, setIsFishActive] = useState(false); 
//     const [isBreakfast, setIsBreakfast] = useState(false); 
//     const [isLunch, setIsLunch] = useState(false); 
//     const [isDinner, setIsDinner] = useState(false); 
//     const [isDrink, setIsDrink] = useState(false); 
//     const handleChicken = () =>{
//         setIsChickenActive(true); 
//         const getChicken = foodProducts.filter(chicken => chicken.catagory === 'chicken'); 
//         setFoodProducts(getChicken); 
//     }
//     const handleFish = () =>{
//         const getChicken = foodProducts.filter(chicken => chicken.catagory === 'fish'); 
//         setFoodProducts(getChicken);
        
//     }
//     const handleForBreakfast = () =>{
//         const getChicken = foodProducts.filter(chicken => chicken.catagory === 'breakfast'); 
//         setFoodProducts(getChicken);
        
//     }
//     const handleLunch = () =>{
//         const getChicken = foodProducts.filter(chicken => chicken.catagory === 'lunch'); 
//         setFoodProducts(getChicken);
        
//     }
//     const handleDinner = () =>{
//         const getChicken = foodProducts.filter(chicken => chicken.catagory === 'dinner'); 
//         setFoodProducts(getChicken);
        
//     }
//     const handleDrinksAndBeverage = () =>{
//         const getChicken = foodProducts.filter(chicken => chicken.catagory === 'drinksAndBeverage'); 
//         setFoodProducts(getChicken);
        
//     }
//     console.log(foodProducts)
//     return (
//         <div>
//             <div className='mb-8'>
//                 <LoggedUserHome></LoggedUserHome>
//             </div>

//             <div id='#availableFood'>
//                 <h1 style={{
//                     backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
//                     backgroundSize: "100%",
//                     backgroundRepeat: "repeat",
//                     webkitBackgroundClip: "text",
//                     webkitTextFillColor: "transparent",
//                     mozBackgroundClip: "text",
//                     mozTextFillColor: "transparent"
//                 }} className='flex justify-center text-5xl'>Available Food</h1>
//                 {/* Selection section */}



//                 <div className=''>
//                     <div className={`${FoodProductStyle?.forSticky} my-8 md:mx-32 lg:mx-36 `}>
//                         <div className={`w-full h-16 text-primary-content ${FoodProductStyle?.selectionCart} rounded-lg`}>
//                             <div className="flex justify-between px-4">
//                                 <button onClick={handleChicken} style={{
//                                     // backgroundImage: "linear-gradient(45deg, aliceblue, yellow )",
//                                     // backgroundSize: "100%",
//                                     // backgroundRepeat: "repeat",

//                                     backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
//                                     backgroundSize: "100%",
//                                     backgroundRepeat: "repeat"

                                    
//                                 }} className="w-32 mt-2 normal-case border-0 btn"> <span className='text-white normal-case '>Chicken</span>
//                                 </button>

//                                 <button onClick={handleFish} style={{
//                                     backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
//                                     backgroundSize: "100%",
//                                     backgroundRepeat: "repeat"
//                                 }} className="w-32 mt-2 normal-case border-0 btn"> <span className='text-white normal-case '>Fish</span>
//                                 </button>
//                                 <button onClick={handleForBreakfast} style={{
//                                     backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
//                                     backgroundSize: "100%",
//                                     backgroundRepeat: "repeat"
//                                 }} className="w-32 mt-2 normal-case border-0 btn"> <span className='text-white normal-case '>For Breakfast</span>
//                                 </button>
//                                 <button onClick={handleLunch} style={{
//                                     backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
//                                     backgroundSize: "100%",
//                                     backgroundRepeat: "repeat"
//                                 }} className="w-32 mt-2 normal-case border-0 btn"> <span className='text-white normal-case '>For Lunch</span>
//                                 </button>
//                                 <button onClick={handleDinner} style={{
//                                     backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
//                                     backgroundSize: "100%",
//                                     backgroundRepeat: "repeat"
//                                 }} className="w-32 mt-2 normal-case border-0 btn"> <span className='text-white normal-case '>For Dinner</span>
//                                 </button>
//                                 <button onClick={handleDrinksAndBeverage} style={{
//                                     backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
//                                     backgroundSize: "100%",
//                                     backgroundRepeat: "repeat"
//                                 }} className="w-32 mt-2 normal-case border-0 btn"> <span className='text-white normal-case '>Drinks & Beverage</span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>


//                     <div className='flex justify-center'>
//                         <div className='grid grid-cols-1 gap-6 mx-4 lg:grid-cols-3 md:grid-cols-2'>
//                             {
//                                 foodProducts.map(food => <div style={{
//                                     backgroundImage: "linear-gradient(45deg, black, white)",
//                                     backgroundSize: "100%",
//                                     backgroundRepeat: "repeat"
//                                 }} className={`shadow-2xl card w-96 ${FoodProductStyle?.foodCard}`}>
//                                     <figure><img className='h-[300px] w-full' src={food.photo} alt="Foods" /></figure>
//                                     <div className="card-body">
//                                         <h2 className="text-2xl "> <span className='text-accent'>Name: </span> {food.name}</h2>

//                                         <p className='flex items-center text-xl'> <span className='mr-2 text-accent'>Price: </span> {food.price} <TbCurrencyTaka size={25}></TbCurrencyTaka></p>

//                                         <p className=''> {food.description}</p>
//                                         <div className="justify-end card-actions">
//                                             <button onClick={() => handleOrderNowButton(food._id)} className="w-full text-xl normal-case btn btn-accent btn-outline">Order Now</button>
//                                         </div>
//                                         <div className='flex justify-between'>

//                                             <label onClick={() => handleRecipe(food._id)} htmlFor="my-modal-5" className="w-full normal-case btn btn-info btn-outline btn-sm">Recipe & Feedback</label>

//                                             <button onClick={() => handleAddToCart(food._id)} style={{
//                                                 position: 'absolute',
//                                                 top: '5px',
//                                                 right: '5px'
//                                             }} className='text-white normal-case btn btn-error btn-sm'>Add to Cart</button>

//                                             <button style={{
//                                                 position: 'absolute',
//                                                 top: '5px',
//                                                 left: '5px'
//                                             }} className='text-white normal-case btn btn-success btn-sm'>
//                                                 Ratings: <span className='mx-2 text-red-600'> 4.5</span>
//                                                 {/* <AiFillStar></AiFillStar>
//                                             <AiFillStar></AiFillStar>
//                                             <AiFillStar></AiFillStar>
//                                             <AiFillStar></AiFillStar>
//                                             <BsStarHalf></BsStarHalf> */}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>)
//                             }
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     {
//                         isRecipeModal && <div>
//                             <input type="checkbox" id="my-modal-5" className="modal-toggle" />
//                             <div className="modal">
//                                 <div className="w-11/12 max-w-5xl modal-box">
//                                     <h3 style={{
//                                         backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
//                                         backgroundSize: "100%",
//                                         backgroundRepeat: "repeat",
//                                         webkitBackgroundClip: "text",
//                                         webkitTextFillColor: "transparent",
//                                         mozBackgroundClip: "text",
//                                         mozTextFillColor: "transparent"
//                                     }} className={`flex justify-center text-3xl font-bold text-accent`}>Recipe for {isRecipeModal[0]}</h3>
//                                     <div className='flex justify-center mt-6'>
//                                         <div className='grid grid-cols-3 gap-4 lg:gap-x-10 md:gap-x-6'>
//                                             <img className='w-20 p-2 border rounded-md lg:h-32 md:h-32 lg:w-36 md:w-32 border-accent' src={isRecipeModal[2]} alt="Recipe Image" />
//                                             <img className='w-20 p-2 border rounded-md lg:h-32 md:h-32 lg:w-36 md:w-32 border-accent' src={isRecipeModal[2]} alt="Recipe Image" />
//                                             <img className='w-20 p-2 border rounded-md lg:h-32 md:h-32 lg:w-36 md:w-32 border-accent' src={isRecipeModal[2]} alt="Recipe Image" />
//                                         </div>
//                                     </div>
//                                     <p style={{
//                                         backgroundImage: "linear-gradient(45deg, #FEA1BF, #BFEAF5)",
//                                         backgroundSize: "100%",
//                                         backgroundRepeat: "repeat",
//                                         webkitBackgroundClip: "text",
//                                         webkitTextFillColor: "transparent",
//                                         mozBackgroundClip: "text",
//                                         mozTextFillColor: "transparent"
//                                     }} className="flex justify-center px-4 py-4 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut odio corporis, sapiente praesentium officiis, vel tenetur tempora recusandae dolorum saepe possimus enim at! Doloribus velit dolores quae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aut odio corporis, sapiente praesentium officiis, vel tenetur tempora recusandae dolorum saepe possimus enim at! Doloribus velit dolores quae</p>
//                                     <div className='flex items-end justify-between modal-action'>
//                                         <div className='w-80'>
//                                             <div className="w-full max-w-xs form-control">
//                                                 <label className="label">
//                                                     <span style={{
//                                                         // backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
//                                                         backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
//                                                         backgroundSize: "100%",
//                                                         backgroundRepeat: "repeat",
//                                                         webkitBackgroundClip: "text",
//                                                         webkitTextFillColor: "transparent",
//                                                         mozBackgroundClip: "text",
//                                                         mozTextFillColor: "transparent"
//                                                     }} className="hidden text-xl label-text lg:block md:block">Some Feedback if any...</span>
//                                                     {
//                                                         thankYou?._id === isRecipeModal[3] ? <span style={{
//                                                             backgroundImage: "linear-gradient(45deg, aliceblue, yellow)",
//                                                             backgroundSize: "100%",
//                                                             backgroundRepeat: "repeat",
//                                                             webkitBackgroundClip: "text",
//                                                             webkitTextFillColor: "transparent",
//                                                             mozBackgroundClip: "text",
//                                                             mozTextFillColor: "transparent"
//                                                         }} className="text-xl cursor-pointer label-text-alt">Thank You</span> : <span onClick={() => handleSubmitFeedBack(isRecipeModal[3])} className="text-2xl text-red-500 cursor-pointer label-text-alt hover:text-accent">{feedBack ? 'Submit' : ''}</span>
//                                                     }
//                                                 </label>

//                                                 <input onChange={(e) => setFeedback(e.target.value)} type="text" placeholder='Type your precious review' className="w-full focus:outline-none input border-accent" />

//                                             </div>
//                                         </div>
//                                         <label style={{
//                                             // backgroundImage: "linear-gradient(45deg, aliceblue, yellow )",
//                                             // backgroundSize: "100%",
//                                             // backgroundRepeat: "repeat",

//                                             backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
//                                             backgroundSize: "100%",
//                                             backgroundRepeat: "repeat",
//                                         }} htmlFor="my-modal-5" className="w-32 btn"> <span className='text-xl text-red-600 normal-case'>Close</span>
//                                         </label>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     }
//                 </div>
//                 <ToastContainer></ToastContainer>
//             </div>
//             {/* Upcoming Next.... */}
//             <div>
//                 <UpcomingNextFood></UpcomingNextFood>
//             </div>
//         </div>
//     );
// };

// export default FoodProduct;