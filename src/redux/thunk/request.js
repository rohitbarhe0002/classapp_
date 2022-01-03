
 import axios from "axios";
import { setUsers } from "../actions";
 
 const client = axios.create({
     baseURL: 'http://localhost:3008',
   });
   
 
   export  const requestUsers = () => async (dispatch) => {
     
 
     try {
       const response = await client.get('/users');
       dispatch(setUsers(response.data));
       console.log("rrrrrrrr",response.data);
     } catch (err) {
       // logs the error whatever error occured in try block
       console.log(err);
     }
   }