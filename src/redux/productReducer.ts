import photoexemple from "../images/photoexemple.webp";
import {ActionType} from "./actions";



export type BrandType = 'Tashe' | 'Limbo' | 'Lerato' | 'Jin' | 'Flario' | 'All';

export interface ProductStateType {
    id: number;
    name: string;
    image: string;
    brand: BrandType;
    price:number
    isDone:boolean
}

export interface InitialStateType {
    filter: BrandType;
    product: ProductStateType[];
}
const initialState: InitialStateType = {
    filter:'All',
    product: [
        {
            id: 1,
            name: 'Product 1',
           price: 20,
            image: photoexemple,
            brand: 'Tashe',
            isDone:true

        },
        {
            id: 2,
            name: 'Product 2',
            price: 20,
            image: photoexemple,
            brand: 'Limbo',
            isDone:false
        },
        {
            id: 3,
            name: 'Product 3',
            price: 20,
            image: photoexemple,
            brand: 'Jin',
            isDone:true
        },
        {
            id: 4,
            name: 'Product 3',
            price: 20,
            image: photoexemple,
            brand: 'Lerato',
            isDone:true
        },
        {
            id: 5,
            name: 'Product 3',
            price: 20,
            image: photoexemple,
            brand: 'Flario',
            isDone:true
        },
    ]
}



export const productReducer = (state:InitialStateType=initialState, action:ActionType)=>{
switch (action.type){
    case "CHANGE-BRAND":
        return state
    default:
        return state
}
}