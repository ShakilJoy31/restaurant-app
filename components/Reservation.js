import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';


const Reservation = () => {
    const router = useRouter();
    const [people, setPeople] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reservationFirstStep, setReservationFirstStep] = useState(false);
    const [exp, setExp] = useState();


    // const [timer, setTimer] = useState(0);
    // const [timerOn, setTimerOn] = useState(false);

    // useEffect(() => {
    //     let interval = null;
    //     if (timerOn) {
    //         interval = setInterval(() => {
    //             setTimer((prevTime) => prevTime + 10);
    //         }, 10);
    //     } else if (!timerOn) {
    //         clearInterval(interval);
    //     }

    //     return () => clearInterval(interval);
    // }, [timerOn]);

    const handleFindTableButton = () => {
        setReservationFirstStep(true);
        // setTimerOn(true);
    }

    return (
        <div style={{
            background: '#247f9e'
        }} className={`py-32 ${router?.asPath == '/' ? 'mt-4' : ''}`}>
            <h1 className='flex justify-center text-7xl'>Reservations </h1>

            <p className='flex justify-center my-6 text-2xl'>Call us at <span className='mx-2 underline cursor-pointer'> +88-017 6104 3883 </span> or book a table through Open Table reservations:</p>

            <div className='flex justify-center'>

                <select onChange={(e) => setPeople(e.target.value)} style={{
                    borderRight: '1px solid red',
                    borderRadius: '5px 0 0px 5px'
                }} className="w-full max-w-xs text-black bg-white select hover:bg-black hover:text-white">
                    <option disabled selected> 1 People</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5 People</option>
                    <option>6 People</option>
                </select>

                <input onChange={(e) => setDate(e.target.value)} style={{
                    borderRight: '1px solid red'
                }} className='w-full max-w-xs p-2 text-black bg-white hover:bg-black hover:text-white' type="date" name="" id="" />

                <select onChange={(e) => setTime(e.target.value)} style={{
                    borderRight: '1px solid red',
                    borderRadius: '0'
                }} className="w-full max-w-xs text-black bg-white select hover:bg-black hover:text-white">
                    <option disabled selected>7:00 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                    <option>9:00 PM</option>
                    <option>9:30 PM</option>
                    <option>10:00 PM</option>
                    <option>10:30 PM</option>
                    <option>11:00 PM</option>
                    <option>12:00 AM</option>
                    <option>7:00 AM</option>
                    <option>7:30 AM</option>
                    <option>8:00 AM</option>
                    <option>8:30 AM</option>
                    <option>9:00 AM</option>
                    <option>9:30 AM</option>
                    <option>10:00 AM</option>
                    <option>10:30 AM</option>
                    <option>11:00 AM</option>
                    <option>11:30 AM</option>
                    <option>12:00 PM</option>
                    <option>12:30 PM</option>
                    <option>1:00 PM</option>
                    <option>1:30 PM</option>
                    <option>2:00 PM</option>
                    <option>2:30 PM</option>
                    <option>3:00 PM</option>
                    <option>3:30 PM</option>
                    <option>4:00 PM</option>
                    <option>4:40 PM</option>
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                </select>

                <label onClick={handleFindTableButton} style={{
                    borderRadius: '0px 5px 5px 0'
                }} htmlFor="my-modal-4" className="w-full max-w-xs text-xl text-white normal-case bg-black border-0 btn hover:text-black hover:bg-white">Proceed for Reservation</label>

            </div>

            {
                reservationFirstStep && <div>
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <label htmlFor="my-modal-4" className="cursor-pointer modal">
                        <label className="relative w-11/12 max-w-5xl modal-box" htmlFor="">
                            <h3 className="flex justify-center text-5xl font-bold">Reservation at Ommrito Restaurant</h3>

                            <div className='flex justify-between my-6 gap-x-12'>

                                <div className='w-full mt-4'>
                                    <input type='text' placeholder='Name' className="w-full max-w-md focus:outline-none input border-error" />
                                    <br />
                                    <input type='text' placeholder='Email' className="w-full max-w-md my-4 focus:outline-none input border-error" />
                                    <br />
                                    <input type='text' placeholder='Phone' className="w-full max-w-md mb-4 focus:outline-none input border-error" />
                                    <br />
                                    <select className="w-full max-w-md text-black bg-white select hover:bg-black hover:text-white">
                                        <option disabled selected> Select Occasion</option>
                                        <option>None</option>
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                        <option>Date</option>
                                        <option>Special Occasion</option>
                                        <option>Business mill</option>
                                    </select>
                                </div>

                                <div>
                                    <h1 className='text-3xl'>Omrrito Restaurant</h1>
                                    <div>
                                        <div>
                                            <p><span></span></p>
                                        </div>
                                        <div>

                                        </div>
                                        <div>

                                        </div>
                                        <div>

                                        </div>

                                    </div>

                                    <div className='w-80'>
                                        <p className='mt-2 text-2xl'>What to know before you go</p>
                                        <p className='my-2 text-xl'>A note from the restaurant</p>
                                        <p>Thank you for choosing to dine with us at
                                            Americana Las Vegas. Should your plans
                                            change, please let us know in advance.
                                            Please call us at 702.331.5565 for
                                            inquiries or special events. We at
                                            american value your patronage and will
                                            do our best to accommodate all request…</p>
                                        <p>+ Read More</p>
                                    </div>
                                </div>

                            </div>

                            <button htmlFor="my-modal-4" className="w-full text-xl text-white normal-case bg-black border-0 btn hover:text-black hover:bg-white">Confirm Reservation</button>



                            {/* <p>Due to limited availability, we can hold this table for you for <span>

                                <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>

                                <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
                            </span> minutes</p> */}
                        </label>
                    </label>
                </div>
            }


        </div>
    );
};

export default Reservation;