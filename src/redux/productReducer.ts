
import {ActionType} from "./actions";




export type BrandType = 'Tashe' | 'Limbo' | 'Lerato' | 'Jin' | 'Flario' | 'All';

export interface ProductStateType {
    id: string;
    name: string;
    image: string | File| any;
    brand: string;
    price:number

}
export type InitialStateType = {
    product: ProductStateType[];
};

const initialState: InitialStateType = {
 product:[],
}

export const productReducer = (state:InitialStateType=initialState, action:ActionType)=>{
switch (action.type){
    case "ADD_PRODUCT":
        return{
            ...state,
            product: [...state.product, action.product]
        }
    default:
        return state
}
}


// {
//     id: v1(),
//         name: 'Product 1',
//     price: 20,
//     image: photoexemple,
//     brand: 'Tashe',
//
//
// },
// {
//     id: '2',
//         name: 'Product 2',
//     price: 20,
//     image: photoexemple,
//     brand: 'Limbo',
//
// },
// {
//     id: '3',
//         name: 'Product 3',
//     price: 20,
//     image: photoexemple,
//     brand: 'Jin',
//
// },
// {
//     id: '4',
//         name: 'Product 3',
//     price: 20,
//     image: photoexemple,
//     brand: 'Lerato',
//
// },
// {
//     id: '5',
//         name: 'Product 3',
//     price: 20,
//     image: photoexemple,
//     brand: 'Flario',
//
// },
// ]