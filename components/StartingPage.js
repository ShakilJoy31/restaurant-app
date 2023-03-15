import Style from './CSSfile/StartingPage.module.css'
import { ImSwitch } from "react-icons/im";

const StartingPage = () => {
    const handleGetStartedButton = () => {
        console.log('Get Started Button is called');
        // https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
    }
    return (
        <div style={{
            backgroundImage: `url('https://i.ibb.co/Y8JwszZ/3014596.webp')`,
            width: '100vw',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className={Style.home}>
            <div className='flex justify-center'>
                <button style={{
                    position: 'absolute',
                    top: '50%' 
                }} onClick={handleGetStartedButton} className="text-xl text-black normal-case bg-white border-0 btn btn-error hover:text-white hover:bg-black ">Get Started<span className='ml-2'><ImSwitch size={30} color={'red'}></ImSwitch></span></button>
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