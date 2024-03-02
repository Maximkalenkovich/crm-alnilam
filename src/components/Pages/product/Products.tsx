
import React, {useState} from 'react';
import s from './productStyle.module.css';
import {Button} from "../../../elements/Button";
import { useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux";
import {InitialStateType, ProductStateType} from "../../../redux/productReducer";



export const Products = () => {

    const productList = useSelector<AppRootStateType, InitialStateType>(state => state.productList);
    const [filteredProducts, setFilteredProducts] = useState<ProductStateType[]>(productList.product);

    const onChangeFilter = (brand: string) => {
            const filtered = productList.product.filter(product => product.brand === brand);
            setFilteredProducts(filtered);
    };

    const allChange = () =>{
      setFilteredProducts(productList.product)

    }


    return (
        <div className={s.productList}>

<div>
    <Button title={'Tashe'} onClick={()=>onChangeFilter('Tashe')}/>
    <Button title={'Limbo'} onClick={()=>onChangeFilter('Limbo')}/>
    <Button title={'Jin'} onClick={()=>onChangeFilter('Jin')}/>
    <Button title={'Lerato'} onClick={()=>onChangeFilter('Lerato')}/>
    <Button title={'Flario'} onClick={()=>onChangeFilter('Flario')}/>
    <Button title={'All'} onClick={allChange}/>

</div>


            <div className="container">
                <div className={s.productList}>
                    {filteredProducts.map((product) => (
                        <div className={s.productCard} key={product.id}>
                            <img src={product.image} alt="Product" />
                            <h3 className={s.productTitle}>{product.name}</h3>
                            <p className={s.productDescription}>{product.description}</p>
                            <div className={s.productButtons}>
                                <span>{product.brand}</span>
                                <Button title={'vew'} onClick={()=>{}}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};