import React from 'react'
import style from "./Sale.module.css"
const Sale = () => {
  return (
    <section className={style.divSection}>
   <div className={style.onediv}>
    <div className={style.sale}>
        <h1>Big Sale!</h1>
    </div>
    <div className={style.twoDiv}>
    <div className={style.saleImage}>
        <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg" alt="" />
    </div>
    <div className={style.saleText}>
      <h3>50% less in all items</h3>
      <span>By Carl Smith • September 3, 2018</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
      <button>SHOP NOW</button>
    </div>
    </div>
   </div>

    </section>
  )
}

export default Sale