import React from 'react'
import style from "./Home.module.css"
import Header from '../../components/sections/Header/Header'
import Titles from './Titles/Titles'
import Finding from './Components/FindingSection/Finding'
import Shipping from './Shipping/Shipping'
import Collections from './Collections/Collections'
import Card from './Card/Card'
import Sale from './Sale/Sale'
import Footer from '../../components/Footer/Footer'
import { Link, useNavigate, useNavigation } from 'react-router-dom'


const Home = () => {

  const navigation = useNavigate()
  
  const goBasket = () => {
    navigation('/basket')
  }

    
  

  return (
    
    <>
    <Header />
    <Titles />
    <Finding />
    <Shipping />
    <Collections />
    <Card />
    <Sale />
    <Footer />
    <button className={style.btn} onClick={goBasket}>go to basket</button>
    <Link className={style.wish} to={'/wishlist'}>Go to Wishlist</Link>
    </>
   
  )
}

export default Home