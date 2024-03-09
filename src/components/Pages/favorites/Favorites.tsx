


import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux";
import {InitialStateType, ProductStateType} from "../../../redux/productReducer";
import ProductCard from "../product/ProductCard/ProductCard";
import s from "../product/productStyle.module.css";

export const Favorites = () => {
    const productList = useSelector<AppRootStateType, InitialStateType>(state => state.productList);

    return (
        <div className={s.productCard}>
            {productList.product.map(el => {
                if (el.isDone === true) {
                    return (
                     <ProductCard product={el} key={el.id}/>
                    );
                }
                return null; // Skip rendering if isDone is false
            })}
        </div>
    );
};