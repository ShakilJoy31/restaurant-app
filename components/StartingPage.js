import Style from './CSSfile/StartingPage.module.css'
import { GiFoodChain } from "react-icons/gi";

const StartingPage = () => {
    const handleGetStartedButton = () => {
        console.log('Get Started Button is called');
    }
    return (
        <div>
            <button onClick={handleGetStartedButton} className="text-xl normal-case btn btn-error">Let's Get Started</button>
        </div>
    )
}

export default StartingPage;
