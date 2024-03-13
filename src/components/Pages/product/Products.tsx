import React from 'react';
import s from './productStyle.module.css';
import {Button} from "../../../elements/Button";
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {RatingControlled} from "../../../elements/utilits/RatingControlled";
import {useProducts} from "./useProduct";


export const Products = () => {

    const {
        isAddProductFormVisible,
        setIsAddProductFormVisible,
        filteredProducts,
        filterProductsByBrand,
        newProduct,
        addProduct,
        setNewProduct,
        handleImageChange
    } = useProducts();


    return (
        <div className={s.productList}>
            <div className={'container'}>
                <div className={s.filterButtons}>
                    <Button title={'All'} onClick={() => filterProductsByBrand('All')}/>
                    <Button title={'Tashe'} onClick={() => filterProductsByBrand('Tashe')}/>
                    <Button title={'Limbo'} onClick={() => filterProductsByBrand('Limbo')}/>
                    <Button title={'Jin'} onClick={() => filterProductsByBrand('Jin')}/>
                    <Button title={'Lerato'} onClick={() => filterProductsByBrand('Lerato')}/>
                    <Button title={'Flario'} onClick={() => filterProductsByBrand('Flario')}/>
                </div>
                <button onClick={() => setIsAddProductFormVisible(true)}>Добавить товар</button>
                {isAddProductFormVisible && (
                    <div className={s.addProductForm}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Brand"
                            value={newProduct.brand}
                            onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})}
                        />
                        <input type="file" onChange={handleImageChange}/>
                        {newProduct.image && typeof newProduct.image === 'string' && (
                            <img src={newProduct.image} alt="Product" className={s.image}/>
                        )}
                        {newProduct.image && typeof newProduct.image === 'object' && (
                            <img src={URL.createObjectURL(newProduct.image as File)} alt="Product" className={s.image}/>
                        )}

                        <button onClick={addProduct}>Save</button>
                    </div>
                )}

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

                                        <img src={URL.createObjectURL(product.image)} alt="Product"
                                             className={s.image}/>

                                    </TableCell>
                                    <TableCell className={s.tableCell}>{product.name}</TableCell>
                                    <TableCell className={s.tableCell}>{product.brand}</TableCell>
                                    <TableCell className={s.tableCell}>{product.price} BYN</TableCell>
                                    <TableCell className={s.tableCell}>
                                        <button className={s.button}>View</button>
                                    </TableCell>
                                    <TableCell className={s.tableCell}>
                                        <RatingControlled/>
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