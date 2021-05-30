import * as actionTypes from "../constants/actionTypes"
import * as services from "../services/index"

export const signIn = (formData,router)=> async(dispatch)=> {
    const response=await services.signIn(formData);
}
export const signUp = (formData,router) =>  async(dispatch)=>{
    const response=await services.singUp(formData);
}
