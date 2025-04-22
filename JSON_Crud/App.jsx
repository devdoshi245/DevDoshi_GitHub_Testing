import React, { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import BootstrapExample from './BootstrapExample'
import MaterialUIExample from './MaterialUIExample'
import LifecycleClass from './LifecycleClass'
import LifecycleFunc from './LifecycleFunc'
import Crud from './Crud'
import UserCRUD from './UserCRUD'
import UseRefExample from './UseRefExample'
import UseContextExample from './UseContextExample'
import ContextExample from './ContextExample'
import ApiExample from './ApiExample'
import Customhook from './Customhook'
import LazyComponent from './LazyComponent'
import Menu from './Menu'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'
import Contact from './Contact'

function App() {
  return (
    <Fragment>
    {/* <React.Fragment>
     <> */}
      <div>
        <h3>My Vite project</h3>
        {/* <BootstrapExample /> */}
        {/* <MaterialUIExample /> */}
        {/* <LifecycleClass /> */}
        {/* <LifecycleFunc /> */}
        {/* <Crud /> */}
        {/* <UserCRUD /> */}
        {/* <UseRefExample /> */}
        {/* <ContextExample /> */}
        {/* <UseContextExample /> */}
      {/* <ApiExample/> */}
      {/* <Customhook /> */}
      </div>
      
      {/* // </>
      </React.Fragment> */}
      {/* <LazyComponent /> */}
      {/* <Menu />
      <BrowserRouter>
      <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/crud' element={<Crud />}/>
          <Route path='/contact' element={<Contact />}/>
      </Routes> */}
      {/* </BrowserRouter> */}
      <UserCRUD />
      </Fragment>
  )
}

export default App
