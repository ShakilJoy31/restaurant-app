import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { UserStore } from '../userStore';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <UserStore.Provider>
      <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
    </UserStore.Provider>
  )
}