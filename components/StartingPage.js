import Style from './CSSfile/StartingPage.module.css'
import { GiFoodChain } from "react-icons/gi";

const StartingPage = () =>{
    const handleGetStartedButton = () =>{
        console.log('Get Started Button is called'); 
    }
    return (
        <div style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
            width: '100vw',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }} className={Style.home}>
            <div className='flex justify-center'>
            <button style={{
                position: 'absolute',
                top: '50%'
            }} onClick={handleGetStartedButton} className="w-48 text-xl normal-case btn btn-error ">Let's Go <span className='ml-2'><GiFoodChain size={30}></GiFoodChain></span>...</button>
            </div>
        </div>
    )
}

export default StartingPage; 