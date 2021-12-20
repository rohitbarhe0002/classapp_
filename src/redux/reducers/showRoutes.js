import { SHOW } from "../actions";

const initialState = {
  show: false,
  
}

export const shows = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        show: action.payload
      }
    
    default:
      return state
  }
}
