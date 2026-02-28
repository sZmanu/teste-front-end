import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/nav/NavBar'
import './index.scss'
import Banner from './components/banner/Banner'
import Categoria from './components/categoria/CategoriaLista'

function App() {

  return (
    <>
    <NavBar />
    <Banner />
    <Categoria/>
        
    </>
  )
}

export default App
