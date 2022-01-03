import { USER } from "../actions";

const initialState = {
    userIno:{
        username:'',
        email:'',
        phone:'',
    }
}

   export const usersInfo =(state= initialState, action)=>{
       switch(action.type){
           case USER:
               return{
                   ...state,
                   usersInfo: action.payload,
               }

               default:
               return state
       }

   }