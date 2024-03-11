import React, {useEffect, useState} from 'react';
import s from './productStyle.module.css';
import {Button} from "../../../elements/Button";
import { useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux";
import {InitialStateType, ProductStateType} from "../../../redux/productReducer";
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {RatingControlled} from "../../../elements/utilits/RatingControlled";




export const Products = () => {
    const productList = useSelector<AppRootStateType, InitialStateType>(state => state.productList);
    const [filteredProducts, setFilteredProducts] = useState<ProductStateType[]>(productList.product);

    const filterProductsByBrand = (brand: string) => {
        const filtered = brand !== 'All' ? productList.product.filter(product => product.brand === brand) : productList.product
         setFilteredProducts(filtered)
    };

    const resetFilter = () => {
        setFilteredProducts(productList.product);
    };


    return (
        <div className={s.productList}>
            <div className={'container'}>
                <div className={s.filterButtons}>
                    <Button title={'All'} onClick={resetFilter} />
                    <Button title={'Tashe'} onClick={() => filterProductsByBrand('Tashe')} />
                    <Button title={'Limbo'} onClick={() => filterProductsByBrand('Limbo')} />
                    <Button title={'Jin'} onClick={() => filterProductsByBrand('Jin')} />
                    <Button title={'Lerato'} onClick={() => filterProductsByBrand('Lerato')} />
                    <Button title={'Flario'} onClick={() => filterProductsByBrand('Flario')} />
                </div>


                <div className={s.productTable}>
                    <Table>
                        <TableHead>
                            <TableRow className={s.tableRow}>
                                <TableCell className={s.tableCell}>Image</TableCell>
                                <TableCell className={s.tableCell}>Name</TableCell>
                                <TableCell className={s.tableCell}>Brand</TableCell>
                                <TableCell className={s.tableCell}>Price</TableCell>
                                <TableCell className={s.tableCell}>Action</TableCell>
                                <TableCell className={s.tableCell}>Rating</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredProducts.map((product) => (
                                <TableRow key={product.id} className={s.tableRow}>
                                    <TableCell className={s.tableCell}>
                                        <img src={product.image} alt="Product" className={s.image} />
                                    </TableCell>
                                    <TableCell className={s.tableCell}>{product.name}</TableCell>
                                    <TableCell className={s.tableCell}>{product.brand}</TableCell>
                                    <TableCell className={s.tableCell}>{product.price} BYN</TableCell>
                                    <TableCell className={s.tableCell}>
                                        <button className={s.button}>View</button>
                                    </TableCell>
                                    <TableCell className={s.tableCell}>
                                        <RatingControlled />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

            </div>


        </div>
    );
};