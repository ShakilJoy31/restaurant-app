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

            <Swiper
                freeMode={true}
                grabCursor={true}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    upComingFood.map(singleUpcomingFood => <SwiperSlide>
                        <div>
                            <div style={{
                                backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat"
                            }} className="h-full shadow-2xl card">
                                <figure><img className="w-full h-64" src={singleUpcomingFood.img} alt="Shoes" /></figure>
                                <div>
                                    <div className="">
                                        <div className="flex items-center justify-center gap-x-4">
                                            <div style={{
                                                position: 'absolute',
                                                top: '5px',
                                                right: '5px'
                                            }} className="avatar">
                                                <div className="w-16 border rounded-full border-accent ring-offset-base-100 ring-offset-2">
                                                    <img src="https://placeimg.com/192/192/people" />
                                                </div>
                                            </div>
    
                                            <div>
                                                <h2 className="text-2xl "> <span className="tex-3xl" style={{
                                                    backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                                    backgroundSize: "100%",
                                                    backgroundRepeat: "repeat",
                                                    webkitBackgroundClip: "text",
                                                    webkitTextFillColor: "transparent",
                                                    mozBackgroundClip: "text",
                                                    mozTextFillColor: "transparent"
                                                }}> {singleUpcomingFood.name} </span></h2>
    
                                            </div>
                                        </div>
                                        <p className="px-6 pb-4 text-xl"> <span className='text-accent'>Price: </span> {singleUpcomingFood.price}</p>
                                        <p className="px-6 pb-4 text-xl"> <span className='text-accent'>Will be available on </span> {singleUpcomingFood.availableDate}</p>
                                        <p className="px-6 pb-4 text-xl"> <span className='text-accent'>Description: </span> {singleUpcomingFood.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                
                {/* <SwiperSlide>
                    <div>
                        <div style={{
                            backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat"
                        }} className="h-full shadow-2xl card">
                            <figure><img className="w-full h-64" src="https://placeimg.com/192/192/people" alt="Shoes" /></figure>
                            <div>
                                <div className="">
                                    <div className="flex items-center justify-center gap-x-4">
                                        <div style={{
                                            position: 'absolute',
                                            top: '5px',
                                            right: '5px'
                                        }} className="avatar">
                                            <div className="w-16 border rounded-full border-accent ring-offset-base-100 ring-offset-2">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>

                                        <div>
                                            <h2 className="text-2xl "><span className="text-black tex-3xl">  </span> said about <span className="tex-3xl" style={{
                                                backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                                backgroundSize: "100%",
                                                backgroundRepeat: "repeat",
                                                webkitBackgroundClip: "text",
                                                webkitTextFillColor: "transparent",
                                                mozBackgroundClip: "text",
                                                mozTextFillColor: "transparent"
                                            }}> </span></h2>

                                        </div>
                                    </div>
                                    <p className="flex items-center justify-center px-6 pb-4"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div style={{
                            backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat"
                        }} className="h-full shadow-2xl card">
                            <figure><img className="w-full h-64" src="https://placeimg.com/192/192/people" alt="Shoes" /></figure>
                            <div>
                                <div className="">
                                    <div className="flex items-center justify-center gap-x-4">
                                        <div style={{
                                            position: 'absolute',
                                            top: '5px',
                                            right: '5px'
                                        }} className="avatar">
                                            <div className="w-16 border rounded-full border-accent ring-offset-base-100 ring-offset-2">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>

                                        <div>
                                            <h2 className="text-2xl "><span className="text-black tex-3xl">  </span> said about <span className="tex-3xl" style={{
                                                backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                                backgroundSize: "100%",
                                                backgroundRepeat: "repeat",
                                                webkitBackgroundClip: "text",
                                                webkitTextFillColor: "transparent",
                                                mozBackgroundClip: "text",
                                                mozTextFillColor: "transparent"
                                            }}> </span></h2>

                                        </div>
                                    </div>
                                    <p className="flex items-center justify-center px-6 pb-4"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div style={{
                            backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat"
                        }} className="h-full shadow-2xl card">
                            <figure><img className="w-full h-64" src="https://placeimg.com/192/192/people" alt="Shoes" /></figure>
                            <div>
                                <div className="">
                                    <div className="flex items-center justify-center gap-x-4">
                                        <div style={{
                                            position: 'absolute',
                                            top: '5px',
                                            right: '5px'
                                        }} className="avatar">
                                            <div className="w-16 border rounded-full border-accent ring-offset-base-100 ring-offset-2">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>

                                        <div>
                                            <h2 className="text-2xl "><span className="text-black tex-3xl">  </span> said about <span className="tex-3xl" style={{
                                                backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                                backgroundSize: "100%",
                                                backgroundRepeat: "repeat",
                                                webkitBackgroundClip: "text",
                                                webkitTextFillColor: "transparent",
                                                mozBackgroundClip: "text",
                                                mozTextFillColor: "transparent"
                                            }}> </span></h2>

                                        </div>
                                    </div>
                                    <p className="flex items-center justify-center px-6 pb-4"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div style={{
                            backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat"
                        }} className="h-full shadow-2xl card">
                            <figure><img className="w-full h-64" src="https://placeimg.com/192/192/people" alt="Shoes" /></figure>
                            <div>
                                <div className="">
                                    <div className="flex items-center justify-center gap-x-4">
                                        <div style={{
                                            position: 'absolute',
                                            top: '5px',
                                            right: '5px'
                                        }} className="avatar">
                                            <div className="w-16 border rounded-full border-accent ring-offset-base-100 ring-offset-2">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>

                                        <div>
                                            <h2 className="text-2xl "><span className="text-black tex-3xl">  </span> said about <span className="tex-3xl" style={{
                                                backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                                backgroundSize: "100%",
                                                backgroundRepeat: "repeat",
                                                webkitBackgroundClip: "text",
                                                webkitTextFillColor: "transparent",
                                                mozBackgroundClip: "text",
                                                mozTextFillColor: "transparent"
                                            }}> </span></h2>

                                        </div>
                                    </div>
                                    <p className="flex items-center justify-center px-6 pb-4"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div style={{
                            backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat"
                        }} className="h-full shadow-2xl card">
                            <figure><img className="w-full h-64" src="https://placeimg.com/192/192/people" alt="Shoes" /></figure>
                            <div>
                                <div className="">
                                    <div className="flex items-center justify-center gap-x-4">
                                        <div style={{
                                            position: 'absolute',
                                            top: '5px',
                                            right: '5px'
                                        }} className="avatar">
                                            <div className="w-16 border rounded-full border-accent ring-offset-base-100 ring-offset-2">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>

                                        <div>
                                            <h2 className="text-2xl "><span className="text-black tex-3xl">  </span> said about <span className="tex-3xl" style={{
                                                backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                                backgroundSize: "100%",
                                                backgroundRepeat: "repeat",
                                                webkitBackgroundClip: "text",
                                                webkitTextFillColor: "transparent",
                                                mozBackgroundClip: "text",
                                                mozTextFillColor: "transparent"
                                            }}> </span></h2>

                                        </div>
                                    </div>
                                    <p className="flex items-center justify-center px-6 pb-4"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>


            {/* <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className='mySwiper'
                slidesPerView={3}
                spaceBetween={30}
            >
                <SwiperSlide>
                    <h1>1</h1>
                </SwiperSlide>
            </Swiper> */}
        </div>
    );
};

export default UpcomingNextFood;