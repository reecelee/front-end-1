import { use, useState } from 'react'
import './App.css'
import './CurrentDate'
import CurrentDate from './CurrentDate'
import ListItem from './ListItem'
import Filter from './Filter'

function App() {
  
  
  return (

    <>
    <CurrentDate></CurrentDate>
    <Filter></Filter>
    <ListItem score="Houston Astros(W) vs. Pittsburg Pirates(L) 3-0" description="The Houston Astros blanked the Pittsburg Pirates on their way to winning 3-0. Paul Skeenes, sophomore star, pitched 8 innings while only allowing one run. The opposing starter through 6 scoreless innings on his way to take home the win."></ListItem>
    <ListItem score="Minnesota Lynx(W) vs. Pheonix Mercury(L) 88-65 " description="The Minnesota Lynx continue their dominance of the WNBA with the Mercury as their latest victim. They improve to 8-0 on the season behind a strong game from Napheesa Collier scoring 18 points on 8/13 shooting. The Mercury were led by Lexi Hield who scored 16 points, but their defense couldn't stop the dominant Lynx."></ListItem>
    <ListItem score="Indiana Fever(W) vs. Washington Mystics(L) 85-76 " description="The Indiana Fever bounce back to their winning ways after the loss of Caitlin Clark. Kelsey Mitchell starred for the team scoring 23 points for the Fever. Kiki Iriafen led the Mystics with 20 points as they continue to struggle against strong opponents."></ListItem>
    <ListItem score="United States(W) vs. Jamaica(L) 4-0 " description="The American women continue their dominance in soccer with a friendly win against Jamaica. They dominated the match holding Jamaica to less than 20% posession time. Sentnor scored twice for the women in red, white, and blue. "></ListItem>
    </>
  )
}

export default App
