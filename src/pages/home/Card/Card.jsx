import React, { useEffect, useState } from 'react'
import styles from "./Card.module.css"
import { FaBasketShopping } from "react-icons/fa6";
import { getProductsThunk } from '../../../redux/reducers/productsSlice';
import { useDispatch, useSelector } from 'react-redux';


const Card = () => {


    const dispacth = useDispatch()
    const products = useSelector((state) => state.products.products) || []
    console.log(products);

    useEffect(() => {
        dispacth(getProductsThunk())
    }, [])



    return (
        <>

            <div className={styles.container}>
                <h2>Featured Products</h2>
                <div className={styles.cards}>
                    {products && products.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <img src={item.thumbnail} alt="..." />
                            < h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button><a href="#"><FaBasketShopping className={styles.icon} size={24} color='white' /></a>Sepete at</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Card