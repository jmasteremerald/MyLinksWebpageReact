import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  return (
    <>
    <div className="backgroundImage">
      <div className="shape shape1">Transform</div>
      <div className="shape shape2">Uplift</div>
      <div className="shape shape3">Faith</div>
      <div className="shape shape4">Inspire</div>
      <Card/>
    </div>
    <div id="backgroundImage" ></div>
    </>
  )
}
export default App
