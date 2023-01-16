import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { OrderFoodStore, UserStore } from '../userStore';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <UserStore.Provider>
      <OrderFoodStore.Provider>
      <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
    </OrderFoodStore.Provider>
    </UserStore.Provider>
  )
}