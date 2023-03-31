import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { ImTwitter } from 'react-icons/im';
const Footer = () => {
    return (
        <div className="">
            <footer style={{ background: "linear-gradient(45deg, #FF8E9E, #C0DEFF)" }} class="footer p-10 Footer grid md:flex lg:flex justify-around text-base-content">
                <div className=''>
                    <span style={{
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: "Black"
                    }} class=" block mb-[20px]">Our Address</span>
                    <p class="link link-hover  text-black">Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p class="link link-hover  text-black">Support: omrrito.restaurant@gmail.com</p>
                    <p class="link link-hover  text-black">Helpline: +8801761043883, +8801521712092 <br />
                    (Available: 6:00am To 12:00pm)</p>
                </div>

                {/* Useful Links */}
                <div className=''>
                    <span style={{
                        color: '#61876E',
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: "Black"
                    }} class=" mb-[20px]">Useful Links</span>
                    <a class="link link-hover  text-black">Home</a>
                    <Link href='/' class="link link-hover  text-black">Available Food</Link>
                    <a class="link link-hover flex justify-center items-center  text-black">
                        <p className=''>Reservations</p>
                    </a>
                    <a class="link link-hover  text-black">About Us</a>
                </div>

                {/* ml-2 md:ml-10 lg:ml-2 */}
                <div className=''>
                    <span style={{
                        color: '#61876E',
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: "Black"
                    }} class=" mb-[20px]">Follow Us</span>
                    <div className=''>
                        <div className='flex gap-x-8'>
                            
                            <Link href='https://www.facebook.com/shakil.ahammedjoy.39/' class="link link-hover flex justify-center items-center text-black">
                                <BsFacebook color={'#2D4A9D'} size={28}></BsFacebook>
                            </Link>

                            <Link href='https://www.instagram.com/shakil.ahammedjoy.39/' class="link link-hover flex justify-center items-center text-black">
                                <AiOutlineInstagram color={'#2D4A9D'} size={30}></AiOutlineInstagram>
                            </Link>

                            <Link href='https://twitter.com/?lang=en' class="link link-hover flex justify-center items-center text-black">
                                <ImTwitter color={'#2D4A9D'} size={30}></ImTwitter>
                            </Link>

                            <Link href='https://www.youtube.com/' class="link link-hover flex justify-center items-center text-black">
                                <BsYoutube color={'#2D4A9D'} size={30}></BsYoutube>
                            </Link>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;