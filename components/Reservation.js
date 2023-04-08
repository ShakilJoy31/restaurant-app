import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { BsCalendar2DateFill, BsClockFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addReservation } from '../lib/healper';
import ReservationSuccess from './ReservationSuccess';
import FoodProductStyle from './FoodProductStyle.module.css';


const Reservation = () => {
    const router = useRouter();
    const [people, setPeople] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [registerUser, setRegisterUser] = useState();
    const [modalAfterConfirmation, setModalAfterConfirmation] = useState(false);

    useEffect(() => {
        const localStorageUser = JSON.parse(localStorage.getItem('user'));
        setRegisterUser(localStorageUser);
    }, [])

    const handleFindTableButton = () => {
        if (!people || !date || !time) {
            toast.error('OppS, Information for reservation is missing!');
        }
    }
    const [readMore, setReadMore] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [occasion, setOccasion] = useState('');
    const [userRequest, setUserRequest] = useState('');

    const [reminder, setReminder] = useState(false);
    const [dining, setDining] = useState(false);
    const [table, setTable] = useState(false);

    const handleConfirmReservation = () => {
        const reservationFormData = {
            requesterEmail: registerUser?.email,
            name: name ? name : registerUser?.name,
            email: email ? email : registerUser?.email,
            phone: phone ? phone : registerUser?.phone,
            people: people,
            time: time,
            date: date,
            occasion: occasion,
            userRequest: userRequest,
            reminder: reminder,
            dining: dining,
            table: table,
        }
        addReservation(reservationFormData).then(res => {
            if (res) {
                toast.success('Reservation is confirmed');
            }
        })
        setModalAfterConfirmation(true);
    }

    return (
        <div style={{
            background: '#247f9e'
        }} className={`py-32 ${router?.asPath == '/' ? 'mt-4' : ''}`}>
            <h1 className='flex justify-center text-7xl'>Reservations </h1>

            <p className='flex justify-center my-6 text-2xl'>Call us at <span className='mx-2 underline cursor-pointer'> +88-017 6104 3883 </span> or book a table through Open Table reservations:</p>

            <div className='flex justify-center mx-8'>

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
                }} htmlFor="reservation-modal" className="w-full max-w-xs text-xl text-white normal-case bg-black border-0 btn hover:text-black hover:bg-white">Proceed for Reservation</label>

            </div>

            {
                registerUser ? <button onClick={()=>router.push('/myReservation')} style={{
                    backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} btn-sm border-0 block mx-auto text-xl text-black w-64 mt-4`}>My Reservations
                </button> : ''
            }

            {
                people && time && date && <div>
                    <input type="checkbox" id="reservation-modal" className="modal-toggle" />
                    <label className="cursor-pointer modal">
                        {
                            modalAfterConfirmation ? <ReservationSuccess setModalAfterConfirmation={setModalAfterConfirmation} registerUser={registerUser} people={people} date={date} time={time}></ReservationSuccess> : <label style={{
                                backgroundColor: '#247f9e'
                            }} className="relative w-11/12 max-w-5xl modal-box">
                                <label htmlFor="reservation-modal" className="absolute text-white bg-red-700 border-0 btn btn-sm btn-circle right-2 top-2">✕</label>
                                <h3 className="flex justify-center text-4xl font-bold text-black">Reservation at Ommrito Restaurant</h3>

                                <div className='flex justify-between mt-4'>

                                    <div className='mt-4 '>
                                        <input onChange={(e) => (e.target.value) ? setName(e.target.value) : setName(registerUser?.name)} type='text' placeholder={registerUser?.name ? registerUser?.name + ' (Changeable)' : 'Type Your Name'} className="w-full max-w-md text-white bg-black focus:outline-none input " required />
                                        <br />

                                        <input onChange={(e) => (e.target.value) ? setEmail(e.target.value) : setEmail(registerUser?.email)} type='email' placeholder={registerUser?.email ? registerUser?.email + ' (Changeable)' : 'Type Your Email'} className="w-full max-w-md my-4 text-white bg-black focus:outline-none input" required />
                                        <br />

                                        <input onChange={(e) => (e.target.value) ? setPhone(e.target.value) : setPhone(registerUser?.phone)} type='number' placeholder={registerUser?.phone ? registerUser?.phone + ' (Changeable)' : 'Type Your Phone Number'} className="w-full max-w-md text-white bg-black focus:outline-none input " />
                                        <br />

                                        <select onChange={(e) => setOccasion(e.target.value)} className="w-full max-w-md my-4 text-white bg-black focus:outline-none select ">
                                            <option disabled selected> Select Occasion (Optional)</option>
                                            <option>None</option>
                                            <option>Birthday</option>
                                            <option>Anniversary</option>
                                            <option>Date</option>
                                            <option>Special Occasion</option>
                                            <option>Business mill</option>
                                        </select>

                                        {/* <textarea className="w-full rounded-md focus:outline-none" placeholder='Add Special Request (Optional)'></textarea> */}

                                        <textarea onChange={(e) => setUserRequest(e.target.value)} placeholder="Add Special Request (Optional)" className="w-full max-w-md text-white bg-black focus:outline-none textarea" ></textarea>

                                        <div className="my-2 form-control">
                                            <label className="flex items-center cursor-pointer gap-x-4">
                                                <input onChange={(e) => setReminder(e.target.checked)} type="checkbox" className="checkbox checkbox-accent" />
                                                <span className="text-white cursor-pointer hover:underline label-text">Yes, I want to get text updates and reminders <br /> about my reservation</span>
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="flex items-center cursor-pointer gap-x-4">
                                                <input onChange={(e) => setDining(e.target.checked)} type="checkbox" className="checkbox checkbox-accent" />
                                                <span className="text-white cursor-pointer hover:underline label-text">Sign me up to receive dining offers and news <br /> from this restaurant by email.</span>
                                            </label>
                                        </div>

                                        <div className="my-2 form-control">
                                            <label className="flex items-center cursor-pointer gap-x-4">
                                                <input onChange={(e) => setTable(e.target.checked)} type="checkbox" className="checkbox checkbox-accent" />
                                                <span className="text-white cursor-pointer hover:underline label-text">Sign me up to receive dining offers and news <br /> from OpenTable by email.</span>
                                            </label>
                                        </div>

                                    </div>

                                    <div>
                                        <h1 className='mb-4 text-2xl'>Omrrito Restaurant</h1>
                                        <div style={{
                                            borderBottom: '1px solid aliceblue',
                                            paddingBottom: '10px'
                                        }}>
                                            <div>
                                                <p className='flex items-center gap-x-4'>
                                                    <span><BsCalendar2DateFill size={25}></BsCalendar2DateFill></span>
                                                    <span className='text-xl'>{date}</span>
                                                </p>
                                            </div>


                                            <div className='my-2'>
                                                <div>
                                                    <p className='flex items-center gap-x-4'>
                                                        <span><BsClockFill size={25}></BsClockFill></span>
                                                        <span className='text-xl'>{time}</span>
                                                    </p>
                                                </div>
                                            </div>


                                            <div>
                                                <div>
                                                    <p className='flex items-center gap-x-4'>
                                                        <span><FaUserAlt size={25}></FaUserAlt></span>
                                                        <span className='text-xl'>{people}</span>
                                                    </p>
                                                </div>
                                            </div>


                                            <div className='my-2'>
                                                <div>
                                                    <p className='flex items-center gap-x-4'>
                                                        <span><ImLocation size={30}></ImLocation></span>
                                                        <span className='text-xl'>2620 Regatta Dr, Ste 118 Las Vegas, NV, 89128</span>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='w-96'>
                                            <p className='mt-2 text-2xl'>What to know before you go</p>
                                            <p className='my-2 text-xl'>A note from the restaurant</p>
                                            <p>Thank you for choosing to dine with us at
                                                Americana Las Vegas. Should your plans
                                                change, please let us know in advance.
                                                Please call us at 702.331.5565 for
                                                inquiries or special events. We at
                                                american value your patronage and will
                                                do our best to accommodate all request
                                                {readMore ? '' : '...'}
                                                {
                                                    readMore && <span> ,All request for seating is not guaranteed, but we will try our very best to accommodate.</span>
                                                }</p>
                                            {
                                                readMore ? <p onClick={() => setReadMore(!readMore)} className='text-red-300 cursor-pointer'>See Less</p> : <p onClick={() => setReadMore(!readMore)} className='text-red-300 cursor-pointer'>+See More</p>
                                            }

                                        </div>
                                    </div>

                                </div>

                                {
                                    registerUser ? <label onClick={handleConfirmReservation} htmlFor="reservation-modal" className="w-full text-xl text-white normal-case bg-black border-0 btn hover:text-black hover:bg-white">Confirm Reservation</label> : <label onClick={handleConfirmReservation} htmlFor="reservation-modal" className="w-full text-xl text-white normal-case bg-black border-0 btn hover:text-black hover:bg-white" disabled={(!name || !email || !phone)}>Confirm Reservation</label>
                                }

                                <p className='my-4'>*Standard text message rates may apply. You can opt out of receiving text messages at any time. By selecting “Confirm reservation” you are agreeing to the terms and conditions of the <span className='text-red-300 cursor-pointer'>Omrrito User Agreement</span> and <span className='text-red-300 cursor-pointer'>Privacy Policy</span>.</p>

                                <p className=''>Certain U.S. consumers may have additional data rights, which can be exercised by clicking <span className='text-red-300 cursor-pointer'>Do Not Sell or Share My Personal Information</span>.</p>



                                {/* <p>Due to limited availability, we can hold this table for you for <span>

                                <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>

                                <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
                            </span> minutes</p> */}
                            </label>
                        }

                    </label>

                </div>
            }


        </div>
    );
};

export default Reservation;