/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
import { useState } from 'react'
import ExplorePage from '../../componant/ExplorePage/Explorepage'
import Header from '../../componant/Header/Header'
import './Home.css'
import FoodDisplay from '../../componant/fooddisplay/FoodDisplay'
import AppDownload from '../../componant/AppDownload/AppDownload'
const Home = () => {
  const [category , setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExplorePage category ={category} setCategory={setCategory}/>
      <FoodDisplay category ={category}  />
      <AppDownload/>
    </div>
  )
}

export default Home
