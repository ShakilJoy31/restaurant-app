import { useEffect, useState } from "react";
import { VscFeedback } from "react-icons/vsc";
import { getUser } from "../lib/healper";
import FoodProductStyle from '../components/FoodProductStyle.module.css';
import Spinner from "../components/Spinner";

const Feedback = () => {
    const [signedInUser, setSignedInUser] = useState([]);
    const [feedbackUserNumber, setFeedbackUserNumber] = useState(false);
    useEffect(() => {
        getUser().then(res => {
            const checkUserFeedbackNumber = res.filter(s => s.feedback);
            if (feedbackUserNumber) {
                setSignedInUser(checkUserFeedbackNumber);
            }
            else {
                console.log(checkUserFeedbackNumber)
                setSignedInUser(checkUserFeedbackNumber.slice(0, 3))
            }
        });
    }, [signedInUser])

    console.log(signedInUser);

    return (
        <div className="mx-6 lg:mx-28 md:mx-16">
            <h1 className='flex justify-center py-8 text-4xl text-accent'>Food Review Corner</h1>
            {/* Review with card */}
            {
                signedInUser.length == 0 ? <Spinner></Spinner> : <div>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
                            {
                                signedInUser.map((userWithFeedback, index) => userWithFeedback?.feedback &&
                                    <div key={index}>
                                        <div style={{
                                            backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                                            backgroundSize: "100%",
                                            backgroundRepeat: "repeat"
                                        }} className={`h-full shadow-2xl card ${FoodProductStyle?.foodCard}`}>
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
                                                                <img src={userWithFeedback?.photo} />
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

                    <div className="flex justify-end py-6">
                        {
                            !feedbackUserNumber ? <button onClick={() => setFeedbackUserNumber(true)} style={{
                                backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className="normal-case btn btn-sm"> <span className='flex items-center justify-center text-xl text-red-700 hover:text-black'><span>More Feedback</span> <span className='ml-2'><VscFeedback size={30}></VscFeedback></span></span>
                            </button> : <button onClick={() => setFeedbackUserNumber(false)} style={{
                                backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className="normal-case btn btn-sm"> <span className='flex items-center justify-center text-xl text-red-700 hover:text-black'><span>See Less</span> <span className='ml-2'><VscFeedback size={30}></VscFeedback></span></span>
                            </button>
                        }
                    </div>
                    
                </div>
            }

        </div>
    );
};

export default Feedback;


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


{/* <label style={{
                // backgroundImage: "linear-gradient(45deg, aliceblue, yellow )",
                // backgroundSize: "100%",
                // backgroundRepeat: "repeat",

                backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
            }} htmlFor="my-modal-5" className="w-32 btn"> <span className='text-xl text-red-600'>Close</span>
            </label> */}