import {BrandType, ProductStateType} from "./productReducer";


export type ActionType = ReturnType<typeof addProductAC>

export const addProductAC = (product: ProductStateType) => ({
    type: 'ADD_PRODUCT', product
}as const
);

