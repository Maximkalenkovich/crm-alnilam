import photoexemple from "../images/photoexemple.webp";
import {ActionType} from "./actions";



export type BrandType = 'Tashe' | 'Limbo' | 'Lerato' | 'Jin' | 'Flario' | 'All';

export interface ProductStateType {
    id: number;
    name: string;
    description: string;
    image: string;
    brand: BrandType;
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
            description: 'Product 1 Description',
            image: photoexemple,
            brand: 'Tashe',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Product 2 Description',
            image: photoexemple,
            brand: 'Limbo',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Product 3 Description',
            image: photoexemple,
            brand: 'Jin',
        },
        {
            id: 4,
            name: 'Product 3',
            description: 'Product 3 Description',
            image: photoexemple,
            brand: 'Lerato',
        },
        {
            id: 5,
            name: 'Product 3',
            description: 'Product 3 Description',
            image: photoexemple,
            brand: 'Flario',
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