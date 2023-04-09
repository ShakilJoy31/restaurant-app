import Style from './CSSfile/StartingPage.module.css'
import { ImSwitch } from "react-icons/im";
import { useState } from 'react';
import SignUp from './signUp';
import Reservation from './Reservation';

const StartingPage = () => {
    const [signUpModal, setSignUpModal] = useState(false);

    const handleGetStartedButton = () => {
        console.log('Get Started Button is called');
        setSignUpModal(true);
        // https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
    }
    return (
        <div>

        <div style={{
            backgroundImage: `url('https://i.ibb.co/Y8JwszZ/3014596.webp')`,
            width: '100vw',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className={Style.home}>

            <div className=" hero">
                <div className="flex-col hero-content lg:flex-row">
                    <div>
                        <h1 className="text-3xl font-bold lg:text-5xl md:text-4xl">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='flex justify-between md:justify-start md:gap-x-4 lg:justify-start lg:gap-x-6'>
                            <label htmlFor="getStartedBySignUp" onClick={handleGetStartedButton} className="text-xl text-black normal-case bg-white border-0 btn btn-sm hover:text-white hover:bg-black ">Sign up<span className='ml-2'></span></label>

                            <label htmlFor="getStartedBySignUp" className="text-xl text-black normal-case bg-white border-0 btn btn-sm hover:text-white hover:bg-black ">Log in<span className='ml-2'></span></label>

                        </div>
                    </div>
                    <img src="https://d3gz3j27p2eka6.cloudfront.net/sites/default/files/styles/image_gallery_xl/public/images/node/article/143-finshed-perfect-cocktail.jpg?h=5828d82c&itok=4hhSgIRM" className="block w-full mx-auto rounded-lg shadow-2xl md:max-w-md lg:max-w-md" alt='' />

                </div>
            </div>

            {
                signUpModal && <div>
                    <input type="checkbox" id="getStartedBySignUp" className="modal-toggle" />
                    <div className="modal">
                        <div style={{
                            backgroundColor: '#19A7CE',
                            borderRadius: '5px'
                        }} className="relative modal-box lg:w-[650px] md:w-[650px] w-[300px]">
                            <label htmlFor="getStartedBySignUp" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                            <SignUp setSignUpModal={setSignUpModal}></SignUp>
                        </div>
                    </div>
                </div>
            }

        </div>
        <Reservation></Reservation>
</div>
    )
}

export default StartingPage;


{/* <label style={{
    backgroundImage: "linear-gradient(45deg, aliceblue, yellow )",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    // position:'absolute',
    // bottom:'20px',
    // right: '20px'
}} htmlFor="my-modal-5" className="w-32 btn"> <span className='text-xl text-red-600'>Close</span>
</label> */}