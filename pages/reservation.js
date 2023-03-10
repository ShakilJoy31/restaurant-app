import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";
import Reservation from '../components/Reservation';
const upComingFood = [
    {
        name: "Chicken roast",
        img: 'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    },
    {
        name: "Chicken roast",
        img: 'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    },
    {
        name: "Chicken roast",
        img: 'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    },
    {
        name: "Chicken roast",
        img: 'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    },
    {
        name: "Chicken roast",
        img: 'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    },
    {
        name: "Chicken roast",
        img: 'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    }
]



const Reservations = () => {
    return (
        <div>
            <Reservation></Reservation>
        </div>
    );
};

export default Reservations;