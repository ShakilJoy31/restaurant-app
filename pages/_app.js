import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { UserStore } from '../userStore';

export default function MyApp({ Component, pageProps }) {
  return (
    <UserStore.Provider>
      <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
    </UserStore.Provider>
  )
}