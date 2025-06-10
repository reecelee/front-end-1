import { use, useState } from 'react'
import './App.css'
import Title from './Title'

function App() {

  const [entry, setEntry] = useState("")

  function handleSubmit() {
    return (
      setEntry = "Entry accepted."
    )
  }

  return (

    <>
      <Title></Title>
      <form>
        <div>
          <label htmlFor="entry">What did you do today?</label>
          <textarea name="journalEntry">Enter a new entry.</textarea>
          <button onSubmit={handleSubmit}>Submit</button>
        </div>
      </form>
      <div className='display'>
        <p>{entry}</p>
      </div>
    </>
  )
}

export default App
