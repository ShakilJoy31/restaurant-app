const myProfile = () => {
    return (
        <div>
            <h1 className="flex justify-center text-4xl">Update Your Profile here</h1>
            <div className="flex justify-center mt-12">
                <div>
                    <div className='flex mb-6 gap-x-8'>

                        <input type="text" placeholder='What is your name' className="max-w-xs w-80 input focus:outline-none" />

                        <input type="number" placeholder='Type your phone number' className="max-w-xs w-80 input focus:outline-none" />
                    </div>

                    <div className='flex mb-6 gap-x-8'>
                        <input type="email" placeholder='Type your email here' className="max-w-xs w-80 input focus:outline-none" required />
                        <input type="password" placeholder='Type your password' className="max-w-xs w-80 input focus:outline-none" />
                    </div>

                    <div className='flex mb-6 gap-x-8'>
                        <input type="date" placeholder='Date of Birth' className="max-w-xs w-80 input focus:outline-none" />

                        <input type="file" className="max-w-xs w-80 file-input file-input-accent focus:outline-none" />

                        {/* (URL.createObjectURL(e.target.files[0])) */}
                        {/* <button onClick={handleUpdateEmployee} className="mb-8 btn btn-outline btn-accent">Update<span className="ml-2"><GrUpdate size={25} color={'white'}></GrUpdate></span></button> */}

                    </div>


                    <button className="block w-48 mx-auto mb-8 btn btn-outline btn-accent">Sign in</button>

                </div>
            </div>
        </div>
    )
}

export default myProfile; 