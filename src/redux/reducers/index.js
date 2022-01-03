import { combineReducers } from "redux";
import { shows } from "../actions";
import { users } from "./users";
import { usersInfo } from "./getuser";

const reducer=combineReducers({
shows,
users,
usersInfo,
})
export default reducer;