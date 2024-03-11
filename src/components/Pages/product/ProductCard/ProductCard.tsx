import React, {ChangeEvent} from 'react';
import {ProductStateType} from "../../../../redux/productReducer";
import s from '../ProductCard/productCardStyle/productCardStyle.module.css'
import {RatingControlled} from "../../../../elements/utilits/RatingControlled";


export type ProductTypeCard = {
    product:ProductStateType
}


const ProductCard: React.FC<ProductTypeCard> = ({ product }) => {


        return (
            <div className={s.productCard}>
                <img src={product.image} alt="Product" className={s.image} />
                <h3 className={s.title}>{product.name}</h3>
                <span className={s.brand}>{product.brand}</span>
                <span className={s.price}>{product.price} BYN</span>
                <button className={s.button}>View</button>
            </div>
        );
    };

    export default ProductCard;
