import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {AppRootStateType} from "../../../redux/redux";
import {ProductStateType} from "../../../redux/productReducer";
import {v1} from "uuid";
import {addProductAC} from "../../../redux/actions";

export const useProducts = () => {
    const productList = useSelector<AppRootStateType, ProductStateType[]>(
        (state) => state.productList.product
    );
    const [isAddProductFormVisible, setIsAddProductFormVisible] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<ProductStateType[]>(productList);
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState<ProductStateType>({
        id: v1(),
        name: '',
        brand: '',
        price: 0,
        image: null,
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
    };


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewProduct({...newProduct, image: e.target.files?.[0]});
    };

    return {
        productList,
        isAddProductFormVisible,
        setIsAddProductFormVisible,
        filteredProducts,
        filterProductsByBrand,
        newProduct,
        handleImageChange,
        addProduct,
        setNewProduct
    };
};
