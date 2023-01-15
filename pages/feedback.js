import { useEffect, useState } from "react";
import { getProduct, getUser } from "../lib/healper";

const feedback = () => {
    const [foodProducts, setFoodProducts] = useState([]);
    const [signedInUser, setSignedInUser] = useState([]);
    useEffect(() => {
        getUser().then(res => setSignedInUser(res));
    }, [signedInUser])

    console.log(signedInUser); 


    return (
        <div className="flex justify-center my-12">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
                {
                    signedInUser.map(userWithFeedback => userWithFeedback?.feedback && <div>
                        <div className="shadow-xl card w-96 bg-base-100">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <p></p>
                            <div className="card-body">
                                <h2 className="card-title">{userWithFeedback.name}</h2>
                                <p>{userWithFeedback?.feedback}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default feedback;