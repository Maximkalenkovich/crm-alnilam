import React, {useEffect, useState} from 'react';
import s from './productStyle.module.css';
import {Button} from "../../../elements/Button";
import { useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux";
import {InitialStateType, ProductStateType} from "../../../redux/productReducer";
import ProductCard from "./ProductCard/ProductCard";




export const Products = () => {
    const productList = useSelector<AppRootStateType, InitialStateType>(state => state.productList);
    const [filteredProducts, setFilteredProducts] = useState<ProductStateType[]>(productList.product);
    const [currentFilter, setCurrentFilter] = useState('All');

    const filterProductsByBrand = (brand: string) => {
        setCurrentFilter(brand);
        const filtered = brand !== 'All' ? productList.product.filter(product => product.brand === brand) : productList.product;
        setFilteredProducts(filtered);
    };

    const resetFilter = () => {
        setCurrentFilter('All');
        setFilteredProducts(productList.product);
    };

    useEffect(() => {
        filterProductsByBrand(currentFilter);
    }, [currentFilter]);

    return (
        <div className={s.productList}>


    <div className={s.filterButtons}>
        <Button title={'All'} onClick={resetFilter} />
        <Button title={'Tashe'} onClick={() => filterProductsByBrand('Tashe')} />
        <Button title={'Limbo'} onClick={() => filterProductsByBrand('Limbo')} />
        <Button title={'Jin'} onClick={() => filterProductsByBrand('Jin')} />
        <Button title={'Lerato'} onClick={() => filterProductsByBrand('Lerato')} />
        <Button title={'Flario'} onClick={() => filterProductsByBrand('Flario')} />
    </div>

    <div className={s.productCard}>
        {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>


        </div>
    );
};