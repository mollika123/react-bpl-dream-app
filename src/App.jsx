
import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './Componentds/Navbar/Navbar'
import Players from './Componentds/Navbar/players/Players';
import Banner from './homePage/banner/Banner'
import { ToastContainer } from 'react-toastify';
import Footer from './Componentds/Footer/Footer';
import Testimonial from './Componentds/testimonial/Testimonial';


const fetchPlayer = async () => {
  const res = await fetch('/data.json');
  return res.json();
}
function App() {
  const playerPromise = fetchPlayer();
  const[coin,setCoin]=useState(50000)
  return (
   <>
    <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
           <Players playerPromise={playerPromise} setCoin={setCoin}coin={coin}></Players>
      </Suspense>
      <Testimonial></Testimonial>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      </>
  )
}

export default App
