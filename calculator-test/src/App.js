import './App.css';
import {All, Calcul } from './component';
import React from 'react'

const App = () => {
  return (
    <div className='calculator__bg'>
      <div className='calculator__form'>
          <h1>calculator</h1>
          <table>
            <All/>
          </table>
      </div>

    </div>
  )
}

export default App