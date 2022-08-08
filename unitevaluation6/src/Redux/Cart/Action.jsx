
import {GET_ALL_PRODUCT,GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY,UPDATE_CART, INCREASE_QUANTITY, DELETE_CART } from "./ActionType"
import callApi from "../../Components/Hooks/fetchProducts";
import { useDispatch } from "react-redux";
export const actFetchProductsRequest = () => {
  // const dispatch=useDispatch();
  return (dispatch) => {
      return callApi('/products', 'GET', null).then(res => {
        
          dispatch(GetAllProduct(res.data));
      });
  }
}

/*GET_ALL_PRODUCT*/
export const GetAllProduct=(payload)=>{
  return{
      type:GET_ALL_PRODUCT,
      payload
  }
}

/*GET NUMBER CART*/
export const GetNumberCart=()=>{
  return{
      type:GET_NUMBER_CART
  }
}

export const AddCart=(payload)=>{
  return {
      type:ADD_CART,
      payload
  }
}
export const UpdateCart=(payload)=>{
  return {
      type:UPDATE_CART,
      payload
  }
}
export const DeleteCart=(payload)=>{
  return{
      type:DELETE_CART,
      payload
  }
}

export const IncreaseQuantity=(payload)=>{
  return{
      type:INCREASE_QUANTITY,
      payload
  }
}
export const DecreaseQuantity=(payload)=>{
  return{
      type:DECREASE_QUANTITY,
      payload
  }
}