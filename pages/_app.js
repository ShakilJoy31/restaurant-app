import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { OrderFoodStore, UserStore } from '../userStore';
import Footer from '../components/Footer';
import { UserFoodSearch } from './../userStore';
import { useState, useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [bgColor, setColor] = useState([]);
  useEffect(()=>{
    const localStorageBgColor = JSON.parse(localStorage.getItem('background')); 
    if(localStorageBgColor){
      setColor(localStorageBgColor); 
    }
  },[])
  return (
    <UserFoodSearch.Provider>
      <UserStore.Provider>
        <OrderFoodStore.Provider>
          <div>
            <Navbar setColor={setColor}></Navbar>
            {
              (bgColor[0] == '#A75D5D' && bgColor[1] == '#0081B4') && <div
              style={{
                  backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
              }}
              >
              <Component {...pageProps} />
            </div>
            }
            
            {
              (bgColor[0] == 'black' && bgColor[1] == '') && <div>
              <Component {...pageProps} />
            </div>
            }
            {
              (bgColor[0] == 'white' && bgColor[1] == '') && <div
              style={{
                  backgroundColor: "white",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
              }}
              >
              <Component {...pageProps} />
            </div>
            }
            {
              (bgColor.length==0) && <div>
              <Component {...pageProps} />
            </div>
            }
            
            <Footer></Footer>
          </div>
        </OrderFoodStore.Provider>
      </UserStore.Provider>
    </UserFoodSearch.Provider>
  )
}

// style={{
//   backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
//   backgroundSize: "100%",
//   backgroundRepeat: "repeat"
// }}