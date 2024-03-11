import photoexemple from "../images/photoexemple.webp";
import {ActionType} from "./actions";



export type BrandType = 'Tashe' | 'Limbo' | 'Lerato' | 'Jin' | 'Flario' | 'All';

export interface ProductStateType {
    id: string;
    name: string;
    image: string;
    brand: BrandType;
    price:number

}

export interface InitialStateType {

    product: ProductStateType[];
}
const initialState: InitialStateType = {
    product: [
        {
            id: '1',
            name: 'Product 1',
            price: 20,
            image: photoexemple,
            brand: 'Tashe',


        },
        {
            id: '2',
            name: 'Product 2',
            price: 20,
            image: photoexemple,
            brand: 'Limbo',

        },
        {
            id: '3',
            name: 'Product 3',
            price: 20,
            image: photoexemple,
            brand: 'Jin',

        },
        {
            id: '4',
            name: 'Product 3',
            price: 20,
            image: photoexemple,
            brand: 'Lerato',

        },
        {
            id: '5',
            name: 'Product 3',
            price: 20,
            image: photoexemple,
            brand: 'Flario',

        },
    ]
}



export const productReducer = (state:InitialStateType=initialState, action:ActionType)=>{
switch (action.type){
    case "CHANGE-STATUS":
        debugger
        return {...state}
    default:
        return state
}
}
