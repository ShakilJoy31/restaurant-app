import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Login from "./login";
import SignUp from "./signUp";
import { BiMessageSquareCheck, BiRestaurant } from "react-icons/bi";
import { UserFoodSearch, UserStore } from "../userStore";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillCheckCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";


const Navbar = ({ setColor }) => {
    const { user, setUser } = UserStore.useContainer();
    const { foodName, setFoodName } = UserFoodSearch.useContainer();
    const [signUpModal, setSignUpModal] = useState(false);
    const [logIn, setLogin] = useState(false);
    const [userPhoto, setUserPhoto] = useState('');
    const [logoutModal, setLogoutModal] = useState(false);

    const handleUserNavbarInput = (event) => {
        setFoodName(event.toLowerCase());
    }
    const router = useRouter();
    const isActive = (route) => {
        if (route === router.pathname) {
            return 'active';
        }
        else {
            return '';
        }
    }

    useEffect(() => {
        const localStorageUser = JSON.parse(localStorage.getItem('user'));
        setUserPhoto(localStorageUser?.photo);
    }, [user])


    const [settingsModal, setSettingsModal] = useState(false);
    const handleSettings = (firstColor, secondColor) => {
        console.log(firstColor, secondColor);
        setColor([firstColor, secondColor]);
        localStorage.setItem('background', JSON.stringify([firstColor, secondColor]))
        setSettingsModal(false);
        toast.success('Applied Background Color.');
    }

    return (
        <div>
            <div style={{
                backgroundImage: `url('https://m.media-amazon.com/images/I/71O4eYqjYjL._SL1500_.jpg')`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
            }} className="navbar">
                <div className="flex-1 ml-[-20px]">
                    <Link href='/' className={`text-xl normal-case ml-6 focus:cursor-pointer ${isActive('/')}`}> <span className="flex items-center">
                        <span><BiRestaurant size={55} color={'rgba(0, 170, 255, 0.672)'}></BiRestaurant></span> <san style={{
                            color: '#FFE15D'
                        }} className='mr-2 lg:ml-2 md:ml-2 lg:text-3xl md:text-2xl'>Ommrito</san>
                    </span> </Link>
                </div>

                <div className="flex-none md:gap-4 lg:gap-6">

                    {
                        userPhoto && <Link className="hidden text-xl lg:block md:block hover:text-red-500" href='/cart'>My Cart</Link>
                    }

                    <Link className="hidden text-xl lg:block md:block hover:text-red-500" href='/userReservation'>Reservation</Link>

                    <Link className="hidden text-xl lg:block md:block hover:text-red-500" href='/feedback'>Feedback</Link>

                    {
                        !userPhoto && <div onClick={() => setLogin(true)}>
                            <label htmlFor="my-modal-3" className="hidden text-xl lg:block md:block hover:text-red-500">Login</label>
                        </div>
                    }

                    {
                        !userPhoto && <div onClick={() => setSignUpModal(true)}>
                            <label htmlFor="my-modal-4" className="hidden text-xl lg:block md:block hover:text-red-500">Sign up</label>
                        </div>
                    }

                    <div className='form-control'>
                        <input onChange={(e) => handleUserNavbarInput(e.target.value)} type='text' placeholder='Search here' className="mr-[10px] lg:mr-[0px] md:mr-[0px] focus:outline-none input lg:w-full w-52 pl-8" />
                        {
                            !foodName ? <span style={{
                                position: 'absolute',
                                top: '29px',
                                marginLeft: '10px'
                            }}><BsSearch></BsSearch></span> : <span style={{
                                position: 'absolute',
                                top: '29px',
                                marginLeft: '10px'
                            }}><BsSearch color={'#1F8A70'}></BsSearch></span>
                        }
                    </div>


                    <div className="dropdown dropdown-end mr-[10px] lg:mr-[0px] md:mr-[0px]">
                        <label tabIndex={0} className=" avatar">
                            {
                                userPhoto ? <div className="w-10 rounded-full">
                                    <img src={userPhoto} />
                                </div> : <div className="w-10 rounded-full btn btn-circle">
                                    <img src={user ? user?.photo : 'https://placeimg.com/80/80/people'} />
                                </div>
                            }
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                            <li>
                                <Link className="block text-xl lg:hidden md:hidden" href='/reservation'>Reservation</Link>
                            </li>

                            <li>
                                {
                                    userPhoto && <Link className="block text-xl lg:hidden md:hidden" href='/cart'>My Cart</Link>
                                }
                            </li>

                            <li>
                                <Link className="block text-xl lg:hidden md:hidden" href='/feedback'>Feedback</Link>
                            </li>
                            <li>
                                <Link className="justify-between" href='/myProfile'>My Profile</Link>
                            </li>

                            <li onClick={() => setSettingsModal(true)}><label htmlFor="settingsModal"><a>Settings</a></label></li>


                            <label onClick={() => {
                                setLogoutModal(true)
                            }} htmlFor="my-modal-6" className="">
                                <li><a className="flex items-end justify-between">
                                    <span>Logout</span>
                                    <RiLogoutCircleRLine size={20} color={'red'}></RiLogoutCircleRLine>
                                </a></li>
                            </label>
                        </ul>
                    </div>
                </div>
            </div>


            {/* For logging in */}
            {
                logIn && <div>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="relative modal-box">
                            <label htmlFor="my-modal-3" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                            <Login setLogin={setLogin}></Login>
                        </div>
                    </div>
                </div>
            }


            {/* For signing up */}
            {
                signUpModal && <div>
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <div className="modal">
                        <div className="relative modal-box">
                            <label htmlFor="my-modal-4" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                            <SignUp setSignUpModal={setSignUpModal}></SignUp>
                        </div>
                    </div>
                </div>
            }


            {/* Log out modal */}
            {
                logoutModal && <div>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
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
                            }} className="flex justify-center mb-6 text-3xl font-bold">Are you sure to log out?</h3>
                            <div className='flex justify-center gap-x-8'>
                                <button
                                    onClick={() => setLogoutModal(false)}
                                    className='btn btn-success btn-outline w-[140px]'>No</button>
                                <button onClick={() => {
                                    localStorage.removeItem('user')
                                    localStorage.removeItem('food')
                                    setUserPhoto('');
                                    setUser(null)
                                    router.push('/')
                                    setLogoutModal(false)
                                }} className='w-[140px] btn btn-error btn-outline'>Yes</button>
                            </div>
                        </label>
                    </label>
                </div>
            }

            {
                // for settings 
                settingsModal && <div>
                    <input type="checkbox" id="settingsModal" className="modal-toggle" />
                    <div className="modal">
                        <div className="relative modal-box">
                            <label htmlFor="settingsModal" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                            <h1 className="flex justify-center text-2xl text-error">Choose a background,</h1>
                            <p className="flex justify-center text-2xl text-accent">For your app</p>
                            <div className='mt-2'>
                                <div className="flex justify-center gap-x-4">

                                    <button onClick={() => handleSettings('#A75D5D', '#0081B4')} style={{
                                        backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat"
                                    }} className='btn'> <span className="text-accent">Gradient</span> </button>
                                    <button onClick={() => handleSettings('black', '')} style={{
                                        backgroundColor: "black",
                                    }} className='border-0 btn'> <span className="text-accent">Black</span> </button>

                                    <button onClick={() => handleSettings('white', '')} style={{
                                        backgroundColor: "white",
                                        // backgroundSize: "100%",
                                        // backgroundRepeat: "repeat",

                                        // backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                        // backgroundSize: "100%",
                                        // backgroundRepeat: "repeat",
                                    }} className='border-0 btn'> <span className="text-accent">White</span> </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;