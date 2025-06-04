import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <h1>Top Games of [Date]</h1>
    <ul className="list-group">
      <a className="list-group-item">
        <div>
          <h2>Houston Astros(W) vs. Pittsburg Pirates(L) 3-0 </h2>
          <p>The Houston Astros blanked the Pittsburg Pirates on their way to winning 3-0. Paul Skeenes, sophomore star, pitched 8 innings while only allowing one run. The opposing starter through 6 scoreless innings on his way to take home the win.</p>
        </div>
      </a>
      <a className="list-group-item">A second item</a>
      <a className="list-group-item">A third item</a>
      <a className="list-group-item">A fourth item</a>
      <a className="list-group-item">And a fifth one</a>
    </ul>
    
    <div>
      <h2>Minnesota Lynx(W) vs. Pheonix Mercury(L) 88-65 </h2>
      <p>The Minnesota Lynx continue their dominance of the WNBA with the Mercury as their latest victim. They improve to 8-0 on the season behind a strong game from Napheesa Collier scoring 18 points on 8/13 shooting. The Mercury were led by Lexi Hield who scored 16 points, but their defense couldn't stop the dominant Lynx.</p>
    </div>
    </>
  )
}

export default App
