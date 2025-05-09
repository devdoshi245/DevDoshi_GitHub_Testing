import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'
import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './Home'
import Contact from './Contact'
import Timepass from './Timepass'

function App() {
  return (
    <>
      <div>
        <Menu />
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/timepass' element={<Timepass />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
