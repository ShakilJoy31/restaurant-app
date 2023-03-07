import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";
const upComingFood = [
    {
        name: "Chicken roast",
        img:'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    },
    {
        name: "Chicken roast",
        img:'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    },
    {
        name: "Chicken roast",
        img:'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    },
    {
        name: "Chicken roast",
        img:'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    },
    {
        name: "Chicken roast",
        img:'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    },
    {
        name: "Chicken roast",
        img:'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
        description: "This is description.",
        availableDate: '25 January 2023',
        price: "400"
    }
]



const UpcomingNextFood = () => {
    return (
        <div className='mt-10'>
            <h1 style={{
                backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
                mozBackgroundClip: "text",
                mozTextFillColor: "transparent"
            }} className='flex justify-center pb-12 text-5xl'>Upcoming your next choose...</h1>
        </div>
    );
};

export default UpcomingNextFood;