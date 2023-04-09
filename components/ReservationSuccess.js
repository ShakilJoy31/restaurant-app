import React, { useRef } from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { FcDownload } from 'react-icons/fc';
import { BsArrowLeft, BsCalendar2DateFill, BsClockFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';

const ReservationSuccess = ({ setModalAfterConfirmation, registerUser, people, date, time }) => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })
    return (
        <div>
            {/* lg:w-[600px] md:w-[600px] */}
            <div style={{
                backgroundColor: '#247f9e',
                borderRadius: '5px'
            }} className="lg:w-[600px] md:w-[600px] w-[330px]">
                <div className="">

                    <div ref={componentRef}>
                    <div style={{
                        borderRadius: '5px 5px 0 0'
                    }} className='flex items-center justify-center pb-6 pl-2 pr-2 bg-green-800 lg:pl-8 md:pl-6 gap-x-4'>
                        <span><RiCheckboxCircleFill size={40}></RiCheckboxCircleFill></span>
                        <div>
                            <h1 className='mt-4 text-xl lg:text-2xl md:text-2xl'>Congratulation</h1>
                            <p>Your table has been confirmed! at <span className='text-red-300 cursor-pointer'>Omrrito Restaurant</span></p>
                            <p className='text-xl text-black'>Please Download the PDF and bring it at {date}</p>
                        </div>
                    </div>

                    <div className='flex items-center w-full p-2'>
                        <div className='flex items-center gap-x-4'>
                            <img className='w-24 h-16 rounded-sm lg:w-36 lg:h-28 md:w-36 md:h-28' src={registerUser?.photo ? registerUser?.photo : 'https://i.ibb.co/KVBdb3M/3692584.jpg'} alt="" />

                            <div>
                                <h1 className='lg:text-2xl md:text-2xl'>Omrrito Restaurant</h1>
                                <span className='flex items-center my-2 gap-x-2'><RiCheckboxCircleFill size={20} color={'black'}></RiCheckboxCircleFill> <small className='block lg:hidden md:hidden'>Reservation Confirmed</small> <span className='hidden lg:block md:block'>Reservation Confirmed</span></span>

                                <div className='w-full '>
                                    <span className='flex items-center mb-2 gap-x-2'><FaUserAlt></FaUserAlt> <span>{people}</span></span>

                                    <span className='flex items-center gap-x-2'><BsCalendar2DateFill></BsCalendar2DateFill> <span>{date} at {time}</span></span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full p-2'>
                        <p className='text-xl lg:text-2xl md:text-2xl'>What to know before you go</p>
                        <p className='my-2 lg:text-xl md:text-xl'>A note from the restaurant</p>
                        <p className='hidden lg:block md:block'>Thank you for choosing to dine with us at
                            Americana Las Vegas. Should your plans
                            change, please let us know in advance.
                            Please call us at 702.331.5565 for
                            inquiries or special events. We at
                            american value your patronage and will
                            do our best to accommodate all request ,All request for seating is not guaranteed, but we will try our very best to accommodate.
                            </p>

                        <small className='block lg:hidden md:hidden'>Thank you for choosing to dine with us at
                            Americana Las Vegas. Should your plans
                            change, please let us know in advance.
                            Please call us at 702.331.5565 for
                            inquiries or special events. We at
                            american value your patronage and will
                            do our best to accommodate all request ,All request for seating is not guaranteed, but we will try our very best to accommodate.
                            </small>
                    </div>
                    </div>



                    <div className="flex items-center justify-between px-2 py-4 ">
                        <label htmlFor='my-modal-4' onClick={() => setModalAfterConfirmation(false)} className="flex items-center text-black normal-case bg-white border-0 hover:text-white hover:bg-black btn btn-sm gap-x-2"> <span><BsArrowLeft size={25}></BsArrowLeft></span> <span>Back</span></label>

                        <span onClick={handlePrint} className='flex items-center justify-center ml-6 text-black normal-case bg-white border-0 hover:text-white hover:bg-black btn btn-sm'><span className='mr-4'>Download PDF</span><FcDownload size={25}></FcDownload></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationSuccess;