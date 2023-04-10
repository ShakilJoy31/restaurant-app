import Style from './CSSfile/StartingPage.module.css'
import { ImSwitch } from "react-icons/im";
import { useState } from 'react';
import SignUp from './signUp';
import Reservation from './Reservation';
import Login from './login';

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

                <div className="hero">
                    <div className="flex-col hero-content lg:flex-row">
                        <div>
                            <h1 className="font-serif text-2xl font-bold lg:text-5xl md:text-4xl">Come Hungry, Leave Happy!</h1>

                            <p className="py-4">Nestled in the heart of downtown, Omrrito Restaurant is a charming bistro that offers a warm and inviting ambiance for diners and others facilities. The walls are adorned with elegant paintings and soft lighting illuminates the cozy dining area, creating an intimate atmosphere for guests.</p>

                            <div className='flex justify-between md:justify-start md:gap-x-4 lg:justify-start lg:gap-x-6'>
                                <label htmlFor="getStartedBySignUp" onClick={handleGetStartedButton} className="text-xl text-black normal-case bg-white border-0 btn btn-sm hover:text-white hover:bg-black ">Sign up<span className='ml-2'></span></label>

                                <label htmlFor="getStartedByLogin" className="text-xl text-black normal-case bg-white border-0 btn btn-sm hover:text-white hover:bg-black ">Log in<span className='ml-2'></span></label>

                            </div>

                                <div style={{
                                    backgroundColor: '#19A7CE',
                                    borderRadius: '5px'
                                }} className="grid mt-6 text-white shadow lg:stats lg:flex md:flex">
                                    <div className="stat">
                                        <div className="stat-figure text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        </div>
                                        <div className="text-white">Total Sells</div>
                                        <div className="stat-value text-primary">25.6K+</div>
                                        <div className="text-black stat-desc">21% more than last month</div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-figure text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div className="text-white">Got Order</div>
                                        <div className="stat-value text-secondary">2.6K+</div>
                                        <div className="text-black stat-desc">30% more than last month</div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-figure text-secondary">
                                            <div className="avatar online">
                                                <div className="w-16 rounded-full ">
                                                    <img src="https://i.ibb.co/ww8kyjL/DSC-1902-2.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-white">Table Reservations</div>
                                        <div className="stat-value text-secondary">8K+</div>
                                        <div className="text-black stat-desc">99+ Table available</div>
                                    </div>
                                </div>
                        </div>
                        <img src="https://d3gz3j27p2eka6.cloudfront.net/sites/default/files/styles/image_gallery_xl/public/images/node/article/143-finshed-perfect-cocktail.jpg?h=5828d82c&itok=4hhSgIRM" className="block w-full mx-auto rounded-lg shadow-2xl md:max-w-md lg:max-w-md" alt='' />

                    </div>
                </div>

                {/* Photo gallery */}
                <div>
                    
                </div>


                <div>
                    <input type="checkbox" id="getStartedByLogin" className="modal-toggle" />
                    <div className="modal">
                        <div style={{
                            backgroundColor: '#19A7CE',
                            borderRadius: '5px'
                        }} className="relative modal-box lg:w-[650px] md:w-[650px] w-[310px]">
                            <label htmlFor="getStartedByLogin" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                            <Login setSignUpModal={setSignUpModal}></Login>
                        </div>
                    </div>
                </div>

                {
                    signUpModal && <div>
                        <input type="checkbox" id="getStartedBySignUp" className="modal-toggle" />
                        <div className="modal">
                            <div style={{
                                backgroundColor: '#19A7CE',
                                borderRadius: '5px'
                            }} className="relative modal-box lg:w-[650px] md:w-[650px] w-[310px]">
                                <label htmlFor="getStartedBySignUp" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                                <SignUp setSignUpModal={setSignUpModal}></SignUp>
                            </div>
                        </div>
                    </div>
                }



            </div>
            <div className='pt-44 lg:pt-0 md:pt-0'>
            <Reservation></Reservation>
            </div>
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