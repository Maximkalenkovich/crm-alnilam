
import React from 'react';
import s from './productStyle.module.css';
import photoexemple from '../../../images/photoexemple.webp'
const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Product 1 Description',
        image: photoexemple,
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Product 2 Description',
        image: photoexemple,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Product 3 Description',
        image: photoexemple,
    },
];

export const Product = () => {
    return (
        <div className={s.productList}>
            <div className="container">
                <div className={s.productList}>
                    {products.map((product) => (
                        <div className={s.productCard} key={product.id}>
                            <img src={product.image} alt="Product" />
                            <h3 className={s.productTitle}>{product.name}</h3>
                            <p className={s.productDescription}>{product.description}</p>
                            <div className={s.productButtons}>
                                <button className={s.editButton}>Edit</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};