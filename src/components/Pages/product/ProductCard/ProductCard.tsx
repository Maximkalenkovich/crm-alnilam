import React from 'react';
import {ProductStateType} from "../../../../redux/productReducer";
import s from '../ProductCard/productCardStyle/productCardStyle.module.css'
import {RatingControlled} from "../../../../elements/utilits/RatingControlled";


export type ProductTypeCard = {
    product:ProductStateType
}


const ProductCard: React.FC<ProductTypeCard> = ({ product }) => {

    return (
 <div className={s.productCard}>
   <RatingControlled/>
<img src={product.image}></img>
<h3 className={s.title}>{product.name}</h3>
 <span>{product.brand}</span>
     <span>{product.price}BYN</span>
     <button className={s.button} >view</button>

 </div>
    );
};
export default ProductCard;
