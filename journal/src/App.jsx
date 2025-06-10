import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>Journal</h1>
      <form>
        <div>
          <label htmlFor="entry">What did you do today?</label>
          <input type="text" />
        </div>
      </form>
    </>
  )
}

export default App
