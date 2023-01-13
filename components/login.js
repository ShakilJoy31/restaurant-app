import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { getUser } from "../lib/healper";

const Login = ({setLogin}) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [isPasswordVasible, setIsPasswordVasible] = useState(true); 
    const handleLoginButton = () =>{
        // getUser().then(res => console.log(res)); 
        setLogin(false);
        console.log(email, password); 
    }
    return (
        <div>
            <h1 className="flex justify-center text-4xl">Login here</h1>
            <div className="flex justify-center mt-12">
                <div>
                    <div className='gap-8 mb-8'>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Type your email here' className="max-w-xs border w-80 input focus:outline-none border-accent" required />
                        <br />
                        <div className="flex items-center justify-center my-6 border rounded-lg gap-x-2 border-accent">
                                <input onChange={(e) => setPassword(e.target.value)} type={isPasswordVasible ? 'password' : 'text'} placeholder='Type your password' className="w-64 max-w-xs mr-6 input focus:outline-none " />
                                {
                                    isPasswordVasible ? <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="pr-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="pr-2"><AiFillEye size={25}></AiFillEye></span>
                                }
                            </div>
                    </div>

                    <button onClick={handleLoginButton} className="block w-48 mx-auto mb-8 btn btn-outline btn-accent">Log in</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;