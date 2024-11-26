import React from 'react'
import style from "./Collections.module.css"
const Collections = () => {
  return (
    <section>
        <div className={style.collections}>
            <div className={style.cart}>
                <div className={style.text}>
                <p>COLLECTIONS</p>
                <h4>WOMEN</h4>
                </div>
            </div>
            <div className={style.cart}>
            <div className={style.text}>
                <p>COLLECTIONS</p>
                <h4>CHILDREN</h4>
                </div>
             
            </div>
            <div className={style.cart}>
            <div className={style.text}>
                <p>COLLECTIONS</p>
                <h4>MEN</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collections