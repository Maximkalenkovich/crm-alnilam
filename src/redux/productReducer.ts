import photoexemple from "../images/photoexemple.webp";
import {ActionType} from "./actions";




export type BrandType = 'Tashe'|'Limbo'|'Lerato'|'Jin'|'Flario'|'All'


export interface ProductStateType{
    id: number;
    name: string;
    description: string;
    image: string;
    brand:BrandType;
}

const initialState: ProductStateType[] = [
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
];


export const productReducer = (state:ProductStateType[]=initialState, action:ActionType)=>{
switch (action.type){
    case "CHANGE-BRAND":
        const deepCopyState = JSON.parse(JSON.stringify(initialState))
        if (action.brand === 'All') {
            return deepCopyState// Возвращаем state без изменений
        } else {
            return deepCopyState.filter((product:ProductStateType) => product.brand === action.brand); // Фильтруем state по brand
        }
    default:
        return state
}
}