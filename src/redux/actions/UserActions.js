import axios from "axios"
import { ERROR_USER, GET_USERS, LOAD_USER } from "../actionTypes/ActionTypes"



export const getUsers=()=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
       const response= await axios.get("https://jsonplaceholder.typicode.com/users")
       dispatch({type:GET_USERS,
        payload:response.data
       })
    } catch (error) {
        dispatch({type:ERROR_USER,
            payload:error
        })
    }
}