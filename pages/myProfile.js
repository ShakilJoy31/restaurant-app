import { getUser, updateUserWithFeedBack } from './../lib/healper';
import { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { UserStore } from "./../userStore";
import 'react-toastify/dist/ReactToastify.css';
const MyProfile = () => {
    const [updatedUser, setUpdatedUser] = useState([]);
    const [isPasswordVasible, setIsPasswordVasible] = useState(true);
    const [modalConfirmPassword, setModalConfirmPassword] = useState(true);

    const [updatedName, setUpdatedName] = useState('');
    const [updatedNumber, setUpdatedNumber] = useState(0);
    const [updatedEmail, setUpdatedEmail] = useState('');
    const [updatedPassword, setUpdatedPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [hostedImage, setHostedImage] = useState('');
    const [foundLocalStorageUser, setFoundLocalStorageUser] = useState([]);
    const { user, setUser } = UserStore.useContainer();


    useEffect(() => {
        const localStorageUser = JSON.parse(localStorage.getItem('user'));
        localStorageUser && setFoundLocalStorageUser(localStorageUser);
        getUser().then(res => {
            const foundUserToBeUpdated = res.find(user => user?.email === localStorageUser?.email);
            setUpdatedUser(foundUserToBeUpdated);
        });

    }, [])
    const formData = { name: updatedName, phone: updatedNumber, email: updatedEmail, password: updatedPassword, photo: hostedImage, feedback: foundLocalStorageUser?.feedback, foodReviewedName: foundLocalStorageUser?.foodReviewedName, foodReviewedPhoto: foundLocalStorageUser?.foodReviewedPhoto, address: address }

    console.log(hostedImage);
    const ImageStorageKey = 'f14d42c3e1584a8f5896e7f3609aa3ad';
    const handleConfirmUpdateUser = () => {
        if (!oldPassword) {
            toast.error(updatedUser?.name + ', Old Password is Required')
        }
        const formDataImage = new FormData();
        formDataImage.append('image', image);
        if (updatedUser?.password === oldPassword) {
            const url = `https://api.imgbb.com/1/upload?key=${ImageStorageKey}`;
            fetch(url, {
                method: 'POST',
                body: formDataImage
            })
                .then(res => res.json())
                .then(result => {
                    setHostedImage(result?.data?.display_url)
                    console.log(result);
                })
        }
        else {
            toast.error(updatedUser?.name + ', Your Password is incorrect')
        }
    }
    if ((updatedUser?.password === oldPassword) && hostedImage) {
        updateUserWithFeedBack(updatedUser?._id, formData).then(res => {
            if (res) {
                setUser(formData);
                console.log(res); 
                localStorage.setItem('user', JSON.stringify(formData));
                toast.success(updatedUser.name + ', Your Profile is Updated Successfully.');
                setHostedImage(''); 
            }
        })
    }
    return (
        <div>
            <h1 className="flex justify-center pt-4 text-4xl text-accent">Update Your Profile here</h1>
            <div className="flex justify-center mt-12">
                <div>
                    <div className='flex mb-6 gap-x-8'>

                        <input onChange={(e) => setUpdatedName(e.target.value)} type="text" placeholder={`${updatedUser?.name ? updatedUser?.name : 'What is your name'}`} className="max-w-xs w-80 input focus:outline-none" />

                        <input onChange={(e) => setUpdatedNumber(e.target.value)} type="number" placeholder={`${updatedUser?.phone ? updatedUser?.phone : 'Update your phone number'}`} className="max-w-xs w-80 input focus:outline-none" />
                    </div>

                    <div className='flex mb-6 gap-x-8'>
                        <input onChange={(e) => setUpdatedEmail(e.target.value)} type="email" placeholder={`${updatedUser?.email ? updatedUser?.email : 'Update your email here'}`} className="max-w-xs w-80 input focus:outline-none" required />

                        <div className='flex items-center justify-center'>
                            <input onChange={(e) => setUpdatedPassword(e.target.value)} type={isPasswordVasible ? 'password' : 'text'} placeholder='Update your password' className="max-w-xs w-80 input focus:outline-none" />
                            {
                                isPasswordVasible ? <span style={{
                                    position: 'relative',
                                    right: '40px'
                                }} onClick={() => setIsPasswordVasible(!isPasswordVasible)} className="pl-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span style={{
                                    position: 'relative',
                                    right: '40px'
                                }} onClick={() => setIsPasswordVasible(!isPasswordVasible)} className="pl-2"><AiFillEye size={25}></AiFillEye></span>
                            }
                        </div>

                    </div>

                    <div className='flex mb-6 gap-x-8'>
                        <input onChange={(e) => setAddress(e.target.value)} type="text" placeholder='Type your address' className="max-w-xs w-80 input focus:outline-none" />

                        <input onChange={(e) => setImage(e?.target?.files[0])} type="file" className="max-w-xs w-80 file-input file-input-accent focus:outline-none" />

                    </div>

                    <label htmlFor="update-password" className="block w-48 mx-auto mb-8 normal-case btn btn-outline btn-accent"> <span className='flex justify-center pt-2 text-xl text-white'>Update</span> </label>

                </div>
            </div>



            {/* For confirm password modal */}

            <div>
                <input type="checkbox" id="update-password" className="modal-toggle" />
                <div className="modal">
                    <div className="relative modal-box">
                        <label htmlFor="update-password" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                        <h3 className="flex justify-center text-3xl text-error">Let me recognize you first</h3>
                        <p className="flex justify-center py-4 text-xl">Type your <span className='mx-2 text-2xl text-error'> old </span> password below</p>
                        <div className='items-center justify-center lg:flex md:flex gap-x-4'>
                            <div className='flex items-center justify-center border rounded-lg border-accent'>
                                <input onChange={(e) => setOldPassword(e.target.value)} type={modalConfirmPassword ? 'password' : 'text'} placeholder='Type your old password' className="max-w-xs w-72 input focus:outline-none" />
                                {
                                    modalConfirmPassword ? <span onClick={() => setModalConfirmPassword(!modalConfirmPassword)} className="px-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span onClick={() => setModalConfirmPassword(!modalConfirmPassword)} className="px-2"><AiFillEye size={25}></AiFillEye></span>
                                }
                            </div>
                            <div onClick={handleConfirmUpdateUser} className="">
                                <label style={{
                                    backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} htmlFor="update-password" className="w-32 btn"> <span className='text-xl text-green-600'>Confirm</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyProfile; 