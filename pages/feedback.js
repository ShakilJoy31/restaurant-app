import { useEffect, useState } from "react";
import { getProduct, getUser } from "../lib/healper";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";



const feedback = () => {
    const [foodProducts, setFoodProducts] = useState([]);
    const [signedInUser, setSignedInUser] = useState([]);
    useEffect(() => {
        getUser().then(res => setSignedInUser(res));
    }, [signedInUser])

    console.log(signedInUser);

    return (
        <div className="flex justify-center mx-6 my-12 lg:mx-28 md:mx-16">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
                
                    {
                        signedInUser.map(userWithFeedback => userWithFeedback?.feedback && 
                            <div>
                                <div style={{
                                    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat"
                                }} className="h-full shadow-2xl card">
                                    <figure><img className="w-full h-64" src={userWithFeedback?.foodReviewedPhoto} alt="Shoes" /></figure>
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
                                                    <h2 className="text-2xl "><span className="text-black tex-3xl"> {userWithFeedback?.name} </span> said about <span className="tex-3xl" style={{
                                                        backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                                        backgroundSize: "100%",
                                                        backgroundRepeat: "repeat",
                                                        webkitBackgroundClip: "text",
                                                        webkitTextFillColor: "transparent",
                                                        mozBackgroundClip: "text",
                                                        mozTextFillColor: "transparent"
                                                    }}> {userWithFeedback?.foodReviewedName}</span></h2>

                                                </div>
                                            </div>
                                            <p className="flex items-center justify-center px-6 pb-4">{userWithFeedback?.feedback}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
            </div>
        </div>
    );
};

export default feedback;


{/* <Swiper
    freeMode={true}
    grabCursor={true}
    slidesPerView={3}
    spaceBetween={30}
    centeredSlides={false}
    autoplay={{
        delay: 2500,
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
        signedInUser.map(userWithFeedback => userWithFeedback?.feedback &&
            <SwiperSlide>
                <div>
                    <div style={{
                        backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat"
                    }} className="h-full shadow-2xl card">
                        <figure><img className="w-full h-64" src={userWithFeedback?.foodReviewedPhoto} alt="Shoes" /></figure>
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
                                        <h2 className="text-2xl "><span className="text-black tex-3xl"> {userWithFeedback?.name} </span> said about <span className="tex-3xl" style={{
                                            backgroundImage: "linear-gradient(45deg, yellow, aliceblue)",
                                            backgroundSize: "100%",
                                            backgroundRepeat: "repeat",
                                            webkitBackgroundClip: "text",
                                            webkitTextFillColor: "transparent",
                                            mozBackgroundClip: "text",
                                            mozTextFillColor: "transparent"
                                        }}> {userWithFeedback?.foodReviewedName}</span></h2>

                                    </div>
                                </div>
                                <p className="flex items-center justify-center px-6 pb-4">{userWithFeedback?.feedback}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    }
</Swiper> */}