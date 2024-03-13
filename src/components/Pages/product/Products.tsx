import React, {useEffect, useState} from 'react';
import s from './productStyle.module.css';
import {Button} from "../../../elements/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux";
import {InitialStateType, ProductStateType} from "../../../redux/productReducer";
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {RatingControlled} from "../../../elements/utilits/RatingControlled";
import {v1} from "uuid";
import {addProductAC} from "../../../redux/actions";




export const Products = () => {

    const productList= useSelector<AppRootStateType, ProductStateType[]>(state => state.productList.product);

    const [isAddProductFormVisible, setIsAddProductFormVisible] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<ProductStateType[]>(productList);

    const dispatch = useDispatch()
    const [newProduct, setNewProduct] = useState<ProductStateType>({
        id: v1(),
        name: '',
        brand: '',
        price: 0,
        image: '',
    });



    const addProduct = () => {
        dispatch(addProductAC(newProduct));
        setIsAddProductFormVisible(false);
    };

    const filterProductsByBrand = (filter: string) => {
        if (filter === 'All') {
            setFilteredProducts(productList);
        } else {
            const filtered = productList.filter((product) => product.brand === filter);
            setFilteredProducts(filtered);
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };


    return (
        <div className={s.productList}>
            <div className={'container'}>
                <div className={s.filterButtons}>
                    <Button title={'All'} onClick={() => filterProductsByBrand('All')}/>
                    <Button title={'Tashe'} onClick={() => filterProductsByBrand('Tashe')} />
                    <Button title={'Limbo'} onClick={() => filterProductsByBrand('Limbo')} />
                    <Button title={'Jin'} onClick={() => filterProductsByBrand('Jin')} />
                    <Button title={'Lerato'} onClick={() => filterProductsByBrand('Lerato')} />
                    <Button title={'Flario'} onClick={() => filterProductsByBrand('Flario')} />
                </div>
                <button onClick={() => setIsAddProductFormVisible(true)}>Добавить товар</button>
                {isAddProductFormVisible && (
                    <div className={s.addProductForm}>
                        {Object.entries(newProduct).map(([key, value]) => (
                            <div key={key}>
                                <label htmlFor={key}>{key}</label>
                                <input
                                    type={key === "price" ? "number" : "text"}
                                    name={key}
                                    id={key}
                                    value={value}
                                    onChange={handleInputChange}
                                />
                            </div>
                        ))}
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