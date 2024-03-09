import React, {useState} from 'react';
import {ProductStateType} from "../../../../redux/productReducer";
import s from '../ProductCard/productCardStyle/productCardStyle.module.css'


export type ProductTypeCard = {
    product:ProductStateType
}


const ProductCard: React.FC<ProductTypeCard> = ({ product }) => {



    const changeStatusProduct =()=>{
    }



    return (
 <div className={s.productCard}>
<img src={product.image}></img>

     <input type ='checkbox'  className = {s.checkBox} checked={product.isDone} onChange={changeStatusProduct}/>

<h3 className={s.title}>{product.name}</h3>

 <span>{product.brand}</span>

     <span>{product.price}BYN</span>

     <button className={s.button} >view</button>

 </div>
    );
};

export default ProductCard;
