import React from 'react'
import style from "./Footer.module.css"
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
  <footer>
    <div className={style.bigFooter}>
        <div className={style.texts}>
            <h3>Navigations</h3>
            <p>Sell online</p>
            <p>Features</p>
            <p>Shopping cart</p>
            <p>Store builder</p>
        </div>
        <div className={style.texts}>
            <p>Mobile commerce</p>
            <p>Dropshipping</p>
            <p>Website development</p>
        </div>
        <div className={style.texts}>
            <p>Point of sale</p>
            <p>Hardware</p>
            <p>Software</p>
        </div>
        
        <div className={style.divfour}>
            <h3>Promo</h3>
            <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" alt="" />
            <p>Finding Your Perfect Shoes</p>
            <p>Promo from nuary 15 — 25, 2019</p>
        </div>

        <div className={style.divfive}>
            <h3>Contact Info</h3>
            <div className={style.icon}>
            <MdPlace />
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className={style.icon}>
            <FaPhoneAlt />
            <p>+2 392 3929 210</p>
            </div>
            <div className={style.icon}>
            <MdEmail />
            <p>emailaddress@domain.com</p>
            </div>

            <div className={style.form}>
                <form action="#">
                    <input type="text" placeholder='email' />
                    <button className={style.btn}>Send</button>
                </form>
            </div>
        </div>
    </div>
  </footer>
  )
}

export default Footer