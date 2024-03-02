
import React from 'react';
import s from './productStyle.module.css';
import {Button} from "../../../elements/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux";
import {BrandType, ProductStateType} from "../../../redux/productReducer";
import {changeFilterBrandAC} from "../../../redux/actions";


export const Products = () => {

    let productList = useSelector<AppRootStateType, ProductStateType[] >(state=>state.productList)
     const dispatch = useDispatch()

    const tasheFilterClickHandler = ()=>{
     dispatch(changeFilterBrandAC('Tashe'))
    }
    const limboFilterClickHandler = ()=>{
        dispatch(changeFilterBrandAC('Limbo'))
    }
    const jinFilterClickHandler = ()=>{
        dispatch(changeFilterBrandAC('Jin'))
    }
    const leratoFilterClickHandler = ()=>{
        dispatch(changeFilterBrandAC('Lerato'))
    }
    const flarioFilterClickHandler = ()=>{
        dispatch(changeFilterBrandAC('Flario'))
    }
    const allFilterClickHandler = ()=>{
        dispatch(changeFilterBrandAC('All'))
    }


    return (
        <div className={s.productList}>

<div>
    <Button title={'Tashe'} onClick={tasheFilterClickHandler}/>
    <Button title={'Limbo'} onClick={limboFilterClickHandler }/>
    <Button title={'Jin'} onClick={jinFilterClickHandler}/>
    <Button title={'Lerato'} onClick={leratoFilterClickHandler}/>
    <Button title={'Flario'} onClick={flarioFilterClickHandler}/>
    <Button title={'All'} onClick={allFilterClickHandler }/>

</div>


            <div className="container">
                <div className={s.productList}>
                    {productList.map((product) => (
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