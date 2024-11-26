import React from 'react'
import style from "./Shipping.module.css"
import { FaTruck } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { HiQuestionMarkCircle } from "react-icons/hi";


const Shipping = () => {
  return (
<div className={style.shipping}>
    <div className={style.shipCart}>
        <div className={style.shipIcon}>
        <FaTruck />
        </div>
        <div className={style.shipText}>
            <h3>Free Shipping</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>

        </div>
    </div>
    <div className={style.shipCart}>
        <div className={style.shipIcon}>
        <VscDebugRestart />

        </div>
        <div className={style.shipText}>
            <h3> Free Returns</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>

        </div>
    </div>
    <div className={style.shipCart}>
        <div className={style.shipIcon}>
        <HiQuestionMarkCircle />
        </div>
        <div className={style.shipText}>
            <h3>Customer Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>

        </div>
    </div>
</div>
  )
}

export default Shipping