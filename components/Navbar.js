import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Login from "./login";
import SignUp from "./signUp";
import { BiRestaurant } from "react-icons/bi";
import { UserStore } from "../userStore";


const Navbar = () => {
    const { user, setUser } = UserStore.useContainer();
    const [signUpModal, setSignUpModal] = useState(false);
    const [logIn, setLogin] = useState(false);
    // const [userPhoto, setUserPhoto] = useState(user? user?.photo : '');
    const signUp = () => {
        console.log('Sign up button is called');
    }
    const handleUserNavbarInput = (event) => {
        console.log(event)
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
        console.log(localStorageUser);
    }, [])

    console.log(user);

    return (
        <div>
            <div className="navbar">
                <div className="flex-1">
                    <Link href='/' className={`text-xl normal-case ml-6 focus:cursor-pointer ${isActive('/')}`}> <span><BiRestaurant size={55} color={'rgba(0, 170, 255, 0.672)'}></BiRestaurant></span> </Link>
                </div>

                <div className="flex-none md:gap-4 lg:gap-6">
                    {
                        !user ? <div onClick={() => setLogin(true)}>
                            <label htmlFor="my-modal-3" className="hidden text-xl lg:block md:block">Login</label>
                        </div> : <div>
                            <label htmlFor="my-modal-3" className="hidden text-xl lg:block md:block">logged</label>
                        </div>
                    }

                    {
                        !user ? <div onClick={() => setSignUpModal(true)}>
                            <label htmlFor="my-modal-4" className="hidden text-xl lg:block md:block">Sign up</label>
                        </div> : <div>
                            <label htmlFor="my-modal-4" className="hidden text-xl lg:block md:block">Signed</label>
                        </div>
                    }


                    <div className="form-control">
                        <input onChange={(e) => handleUserNavbarInput(e.target.value)} type="text" placeholder="Search here" className="mr-[10px] lg:mr-[0px] md:mr-[0px] focus:outline-none input lg:w-full" />
                    </div>

                    <div className="dropdown dropdown-end mr-[10px] lg:mr-[0px] md:mr-[0px]">
                        <label tabIndex={0} className="btn btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user ? user?.photo : 'https://placeimg.com/80/80/people'} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between" href='/myProfile'>My Profile</Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={() => {
                                localStorage.removeItem('user')
                                setUser(null);
                            }
                            }><a>Logout</a></li>
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


        </div>
    );
};

export default Navbar;