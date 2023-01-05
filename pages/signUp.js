import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const SignUp = ({ setSignUpModal }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [isPasswordVasible, setIsPasswordVasible] = useState(true); 
    const handleSignInButton = () => {
        setSignUpModal(false);
        console.log(name, phone, email, password, confirmPassword, photo);
    }
    return (
        <div>
            <div>
                <h1 className="flex justify-center text-4xl">Sign up here</h1>
                <div className="flex justify-center mt-6">
                    <div>
                        <div className='mb-8'>
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Type your name here' className="max-w-xs border w-80 input focus:outline-none border-accent" />
                            <br />
                            <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Type your Phone number' className="max-w-xs my-6 border w-80 input focus:outline-none border-accent" />
                            <br />
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Type your email here' className="max-w-xs border w-80 input focus:outline-none border-accent" required />
                            <br />
                            <div className="flex items-center justify-center my-6 border rounded-lg gap-x-2 border-accent">
                                <input onChange={(e) => setPassword(e.target.value)} type={isPasswordVasible ? 'password' : 'text'} placeholder='Type your password' className="w-64 max-w-xs mr-6 input focus:outline-none " />
                                {
                                    isPasswordVasible ? <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="pr-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="pr-2"><AiFillEye size={25}></AiFillEye></span>
                                }
                            </div>

                            {/* <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder='Type your password' className="max-w-xs my-6 border w-80 input focus:outline-none border-accent" /> */}
                            
                            <input onChange={(e) => setPhoto(URL.createObjectURL(e?.target?.files[0]))} type="file" className="max-w-xs w-80 file-input file-input-accent focus:outline-none" />
                        </div>

                        <button onClick={handleSignInButton} className="block w-48 mx-auto btn btn-outline btn-accent">Sign up</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp; 