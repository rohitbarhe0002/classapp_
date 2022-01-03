import { SET_USERS, SHOW } from "../actions";

const initialState = {
  user : [],
  
}

export const users = (state = initialState, action) => {
  console.log("staete",state);
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        user : action.payload
      }
    
    default:
      return state
  }
}
