import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { UserStore } from "../userStore";
import { addUser } from "../lib/healper";
import { getUser } from './../lib/healper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodProductStyle from './FoodProductStyle.module.css'; 
import Spinner from "./Spinner";

const SignUp = ({ setSignUpModal }) => {
    // All states
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [hostedImage, setHostedImage] = useState('');
    const [isPasswordVasible, setIsPasswordVasible] = useState(true);
    const [signedInUser, setSignedInUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user, setUser } = UserStore.useContainer();
    const ImageStorageKey = '1f2e07ae412954d520f52351b07dee66';
    const formData = { 'name': name, 'phone': phone, 'email': email, 'password': password, 'photo': hostedImage };

    useEffect(() => {
        getUser().then(res => setSignedInUser(res));
    }, [signedInUser])

    const foundDatabaseUser = signedInUser.find(matchedGmail => matchedGmail?.email === email);
    const handleSignInButton = () => {
        setLoading(true);
        // const checkLocalStorage = localStorage.getItem('user');
        const formDataImage = new FormData();
        formDataImage.append('image', image);
        if (!foundDatabaseUser) {
            const url = `https://api.imgbb.com/1/upload?key=${ImageStorageKey}`;
            fetch(url, {
                method: 'POST',
                body: formDataImage
            })
                .then(res => res.json())
                .then(result => {
                    setHostedImage(result?.data?.display_url)
                })
            if (hostedImage) {
                console.log('got hosted image');
            }
        }
        else {
            setTimeout(()=>{
                toast.error('UPPS! ' + foundDatabaseUser?.email + ' is exists. Try another else.')
                setLoading(false);
            }, 1000)
        }
    }

    if (hostedImage && !foundDatabaseUser) {
        addUser(formData).then(res => {
            setLoading(false);
            toast.success('Welcome ' + name + ' to Our Restaurant!')
            localStorage.setItem('user', JSON.stringify(formData));
            setUser(formData);
            setSignUpModal(false);
        })
    }
    return (
        <div>
            <div>
                <h1 className="flex justify-center text-4xl text-white">Sign up here</h1>
                <div className="flex justify-center mt-6">
                    <div>
                        <div className='mb-8'>
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Type your name here' className="w-[300px] bg-black border-0 lg:w-96 md:w-96 input focus:outline-none" />
                            <br />
                            <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Type your Phone number' className="w-[300px] my-6 bg-black border-0 lg:w-96 md:w-96 input focus:outline-none" />
                            <br />
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Type your email here' className="w-[300px] bg-black border-0 lg:w-96 md:w-96 input focus:outline-none" required />
                            <br />
                            <div className="flex items-center justify-between my-6 bg-black border-0 rounded-lg">

                                <input onChange={(e) => setPassword(e.target.value)} type={isPasswordVasible ? 'password' : 'text'} placeholder='Type your passwor' className="mr-4 bg-black border-0 w-[200px] lg:w-72 md:w-72 input focus:outline-none" />
                                {
                                    isPasswordVasible ? <span onClick={() => setIsPasswordVasible(!isPasswordVasible)} className="mr-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span onClick={() => setIsPasswordVasible(!isPasswordVasible)} className="mr-2"><AiFillEye size={25}></AiFillEye></span>
                                }
                            </div>

                            {/* <input onChange={(e) => setImage(URL.createObjectURL(e?.target?.files[0]))} type="file" className="w-64 lg:w-96 md:w-96 file-input file-input-accent focus:outline-none" /> */}

                            <input onChange={(e) => setImage(e?.target?.files[0])} type="file" className="w-[300px] bg-black lg:w-96 md:w-96 file-input file-input-error focus:outline-none " />
                        </div>

                        {
                            !loading ? <button onClick={handleSignInButton} className={`block w-full mx-auto text-xl normal-case border-0 btn ${FoodProductStyle.confirmOrder} mb-4`}>Sign up</button> : <span style={{
                                borderRadius:'5px'
                            }} onClick={handleSignInButton} className={`block mx-auto w-full text-xl normal-case border-0 ${FoodProductStyle.confirmOrder}`}><Spinner></Spinner></span>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp; 