import { ERROR_USER, GET_USERS, LOAD_USER } from "../actionTypes/ActionTypes";



const initialState={
    load:false,
    users:null,
    error:null
}


const UserReducer=(state=initialState,{type,payload})=>{


    switch (type) {
        case LOAD_USER:
            return{...state,load:true}
        case GET_USERS:
            return{...state,users:payload,load:false}
        case ERROR_USER:
            return{...state,error:payload,load:false}
           
    
        default:
            return state
    }
}

export default UserReducer