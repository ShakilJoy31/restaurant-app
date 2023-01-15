import Style from './CSSfile/StartingPage.module.css'
import { TypeAnimation } from 'react-type-animation'

const LoggedUserHome = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url('https://i.ibb.co/KVBdb3M/3692584.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }} className={`${Style.bannerHome} hidden lg:block md:block`}>
                <div className='flex justify-center'>
                    <div style={{
                        position: 'absolute',
                        top: '30%',
                        backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        webkitBackgroundClip: "text",
                        webkitTextFillColor: "transparent",
                        mozBackgroundClip: "text",
                        mozTextFillColor: "transparent"

                        // backgroundImage: "linear-gradient(45deg, aliceblue, yellow )",
                        //     backgroundSize: "100%",
                        //     backgroundRepeat: "repeat",
                    }}>
                        <p className='text-5xl'>Order The Food You Like...</p>

                        <TypeAnimation
                            sequence={[
                                'We will handle the rest.',
                                1000,
                                'We will cook the food for you.',
                                500,
                                'We will reach the food to you in time.',
                                1000,
                                () => {
                                    console.log('Done typing!');
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '2rem' }}
                        />

                        <p className='text-5xl'></p>
                    </div>
                </div>
            </div>



            {/* For Mobile device */}
            <div>
                <div style={{
                    backgroundImage: `url('https://i.ibb.co/KVBdb3M/3692584.jpg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain'
                }} className={`${Style.bannerHomeForMobile} block lg:hidden md:hidden`}>
                    <div className='flex justify-center'>

                    </div>
                </div>
            </div>
        </div>


        // <div style={{

        // }}>
        //     <img className="w-full" src="https://i.ibb.co/KVBdb3M/3692584.jpg" alt="" />
        // </div>
    );
};

export default LoggedUserHome;