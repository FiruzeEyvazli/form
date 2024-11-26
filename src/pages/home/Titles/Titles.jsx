import React from 'react'
import style from "./Titles.module.css"
const Titles = () => {
  return (
    <div className={style.title}>
        <nav>
        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">CATALOGUE</a></li>
                            <li><a href="">NEW ARRIVALS</a></li>
                            <li><a href="">CONTACT</a></li>

                        </ul>
        </nav>
    </div>
  )
}

export default Titles