import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/NavBar'
import Footer from './components/FooterComponent'
import ButtonXs from './components/ButtonXs'
import { useState } from 'react'


function App() {

  const [getNavbarValue, setGetNavbarValue] = useState("");
  const [home, setHome] = useState('')

  const homee = () => {
    setHome('Me Contact');
  };

  const changeNavbarValue = () => {
    setGetNavbarValue("semangat  terus mughni ")
  };

  return (
    <>
      <Navbar name="muhgni" homee={home}  />
      <h1 className='fw-bold  text-center mt-5 pt-5 text-warning '>Nama Saya Mughni</h1>
      <ButtonXs  cc={homee} />
      {/* <Footer name={navtext} kepala={header} paragraf={paragraf} /> */}
    </>
  )
}

export default App;
