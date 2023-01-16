import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { ImTwitter } from 'react-icons/im';
const Footer = () => {
    return (
        <div className="mt-12">
            <footer style={{ background: "linear-gradient(45deg, #FF8E9E, #C0DEFF)" }} class="footer p-10 Footer grid md:flex lg:flex justify-around text-base-content">
                <div className=''>
                    <span style={{
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: "Black"
                    }} class="footer-heading block mb-[20px]">Office Address</span>
                    <p class="link link-hover lg:ml-20 md:ml-20 text-black">Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p class="link link-hover lg:ml-20 md:ml-20 text-black">Support: Web@Programming-Hero.Com</p>
                    <p class="link link-hover lg:ml-20 md:ml-20 text-black">Helpline: 01322810867, 01322810873 <br />
                    (Available: 9:00am To 10:00pm)</p>
                </div>

                {/* Useful Links */}
                <div className=''>
                    <span style={{
                        color: '#61876E',
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: "Black"
                    }} class="footer-heading mb-[20px]">Useful Links</span>
                    <a class="link link-hover lg:ml-20 md:ml-20 text-black">Home</a>

                    <Link href='/' class="link link-hover lg:ml-20 md:ml-20 text-black">Available Food</Link>

                    <a class="link link-hover flex justify-center items-center lg:ml-20 md:ml-20 text-black">
                        <p className=''>Upcoming Next...</p>
                    </a>

                    <a class="link link-hover lg:ml-20 md:ml-20 text-black">About Us</a>
                </div>

                {/* ml-2 md:ml-10 lg:ml-2 */}
                <div className=''>
                    <span style={{
                        color: '#61876E',
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: "Black"
                    }} class="footer-heading mb-[20px]">Follow Us</span>
                    <div className='lg:ml-20 md:ml-20'>
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