import React from 'react'
import style from "./Header.module.css"
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
    return (

        <div className={style.headertop}>

            <div className={style.text}>
                <div className={style.search}>
                    <IoIosSearch />

                </div>
                <div className={style.form}>
                    <form action="#">
                        <input type="text" placeholder='search' />
                    </form>

                    <div>
                        <a href="#" className={style.logo}>SHOPPERS</a>
                    </div>

                    <div className={style.icons}>
                        <FaUser />
                        <FaRegHeart />
                        <FaShoppingCart />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header