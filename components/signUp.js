import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { UserStore } from "../userStore";
import { addUser } from "../lib/healper";
import { getUser } from './../lib/healper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ setSignUpModal }) => {
    // All states
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [isPasswordVasible, setIsPasswordVasible] = useState(true);
    const [signedInUser, setSignedInUser] = useState([]);
    const { user, setUser } = UserStore.useContainer();
    // const [isPostedUser, setIsPostedUser] = useState(''); 
    const formData = { 'name': name, 'phone': phone, 'email': email, 'password': password, 'photo': photo };

    useEffect(() => {
        getUser().then(res => setSignedInUser(res));
    }, [signedInUser])

    const handleSignInButton = () => {
        const foundDatabaseUser = signedInUser.find(matchedGmail => matchedGmail?.email === email);
        if (!foundDatabaseUser) {
            addUser(formData).then(res => {
                const checkLocalStorage = localStorage.getItem('user');
                if (!checkLocalStorage) {
                    localStorage.setItem('user', JSON.stringify(formData));
                    setUser(formData)
                    setSignUpModal(false)
                    toast.success('Welcome to Our Restaurant!')
                }
            })
        }
        else{
            toast.error('UPPS! '+foundDatabaseUser?.email+' is exists. Try another else.')
            console.log('User exists on the database.');
        }
    }
    return (
        <div>
            <div>
                <h1 className="flex justify-center text-4xl text-accent">Sign up here</h1>
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
                                    isPasswordVasible ? <span onClick={() => setIsPasswordVasible(!isPasswordVasible)} className="pr-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span onClick={() => setIsPasswordVasible(!isPasswordVasible)} className="pr-2"><AiFillEye size={25}></AiFillEye></span>
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