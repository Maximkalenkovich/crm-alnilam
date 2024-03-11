import {BrandType} from "./productReducer";


export type ActionType = ReturnType<typeof changeStatusActionCreate>

export const  changeStatusActionCreate= (productId:string,isDone:boolean)=> {
    return{
        type:"CHANGE-STATUS",
        productId,
        isDone
    }as const
}