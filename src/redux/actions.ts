import {BrandType} from "./productReducer";


export type ActionType = ReturnType<typeof changeFilterBrandAC>



    export const changeFilterBrandAC = (brand:BrandType)=>{
    return{
        type:'CHANGE-BRAND',
        brand
    }
    }