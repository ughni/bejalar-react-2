import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/NavBar'
import Footer from './components/FooterComponent'
import ButtonXs from './components/ButtonXs'


function App() {
  const navtext = "M Muhgni"
  const header = "spuerpmen"


  const clickked = () => {
    alert('Semangat Belajar Muguhni')
  }


  const paragraf = () => { return <h1>Mughni</h1> }

  const kalimat = () => {
    return (
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam dicta beatae eos consectetur optio, aut unde, atque exercitationem quo distinctio consequuntur quidem libero nam explicabo rerum. Natus, itaque neque.</p>
    )
  }

  return (
    <>
      <Navbar name="muhgni" />
      <h1 className='fw-bold  text-center mt-5 pt-5 text-warning '>Nama Saya Mughni</h1>
      <ButtonXs clickked={clickked}  kalimat={kalimat} />
      <Footer name={navtext} kepala={header} paragraf={paragraf} />
    </>
  )
}

export default App;
