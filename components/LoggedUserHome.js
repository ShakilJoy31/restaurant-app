import Style from './CSSfile/StartingPage.module.css'
import { TypeAnimation } from 'react-type-animation'
import { UserFoodSearch } from '../userStore';
import FoodProductStyle from './FoodProductStyle.module.css';
import StartingPage from './StartingPage';

const LoggedUserHome = () => {
    const {foodName, setFoodName} = UserFoodSearch.useContainer();  
    return (
        <div className={`${foodName ? FoodProductStyle.hiddenNavbar : FoodProductStyle.blockNavbar }`}>
            <div style={{
                backgroundImage: `url('https://everydaypower.com/wp-content/uploads/2021/05/50-Star-Quotes-About-the-Beauty-of-the-Night-Sky.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }} className={`${Style.bannerHome} `}>
                <div className=''>
                <StartingPage></StartingPage>
                </div>
            </div>

            {/* url('https://i.ibb.co/Y8JwszZ/3014596.webp */}
            {/* https://i.ibb.co/KVBdb3M/3692584.jpg */}
        </div>
    );
};

export default LoggedUserHome;