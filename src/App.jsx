import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/NavBar'
import Footer from './components/FooterComponent'
import ButtonXs from './components/ButtonXs'
import { useState, useEffect } from 'react'


function App() {

  const [kado, setKado] = useState(0);
  const [namaPrisiden, setNamaPrisiden] = useState("");

  useEffect(() => {
    if (kado > 3) {
      setNamaPrisiden('Mughni');
    } else {
      setNamaPrisiden('ikbal')
    }
  }, [kado])

  return (
    <>
      <h1 className='text-center fw-bold text-warning pt-5'>Nama Presiden 2050 : {namaPrisiden}</h1>
      <h1 className='fw-bold  text-center mt-5 pt-5 text-warning '>Nama Saya Mughni</h1>
      <h1 className='text-center fw-bold text-warning'> Tahun : <i>{kado}</i> </h1>

      <button onClick={() => setKado((kurang) => Math.max(kurang - 1, 0))}>Not enough</button>
      <button onClick={() => setKado(0)}>Reset</button>
      <button onClick={() => setKado(kado + 1)}>Plus</button>
    </>
  )
}

export default App;
