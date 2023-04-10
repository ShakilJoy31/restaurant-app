import { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { getUser } from "../lib/healper";
import { UserStore } from "../userStore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodProductStyle from '../components/FoodProductStyle.module.css'; 
import Spinner from "./Spinner";

const Login = ({setLogin}) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [isPasswordVasible, setIsPasswordVasible] = useState(true); 
    const [loggedInUser, setLoggedInUser] = useState([]);
    const { user, setUser } = UserStore.useContainer();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getUser().then(res => setLoggedInUser(res));
    },[])
    const handleLoginButton = () =>{
        setLoading(true); 
        const foundDatabaseUser = loggedInUser.find(matchedGmail => matchedGmail?.email === email && matchedGmail?.password === password);
        console.log(foundDatabaseUser); 
        if(foundDatabaseUser){
            const checkLocalStorage = localStorage.getItem('user');
                if (!checkLocalStorage) {
                    localStorage.setItem('user', JSON.stringify(foundDatabaseUser));
                    setUser(foundDatabaseUser)
                    setLogin(false);
                    toast.success('Welcome back to Our Restaurant!')
                }
        }
        else{
            toast.error('UPPS! Invalid Gmail or Password')
        }
    }
    return (
        <div>
            <h1 className="flex justify-center text-4xl text-white">Login here</h1>
            <div className="flex justify-center">
                <div>
                    <div className='my-6'>

                        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Type your email here' className="w-[290px] bg-black border-0 lg:w-96 md:w-96 input focus:outline-none block mx-auto mb-4" required />
                        

                        <div className="flex items-center justify-between bg-black border-0 rounded-lg w-[290px] lg:w-96 md:w-96">
                                <input onChange={(e) => setPassword(e.target.value)} type={isPasswordVasible ? 'password' : 'text'} placeholder='Type your password' className="mr-4 w-[270px] bg-black border-0 lg:w-96 md:w-96 input focus:outline-none" />
                                {
                                    isPasswordVasible ? <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="mr-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="mr-2"><AiFillEye size={25}></AiFillEye></span>
                                }
                        </div>
                    </div>

                    {
                        !loading ? <button onClick={handleLoginButton} className={`block w-full mx-auto text-xl normal-case border-0 btn ${FoodProductStyle.confirmOrder} mb-4`}>Log in</button> : <div onClick={()=>setLoading(false)}><Spinner></Spinner></div>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Login;