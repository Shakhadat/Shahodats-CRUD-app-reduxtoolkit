import {createSlice} from '@reduxjs/toolkit';
import { UsersData } from '../FaceData';

export const userSlice=createSlice({
    name:"users",
    initialState:{value:UsersData},
    reducers:{
        addUser:(state, action)=>{
            // add user code
            state.value.push(action.payload);
        },
        deleteUser:(state, action)=>{
            state.value=state.value.filter((user)=>user.id !== action.payload.id);
        },
        upDateUsername:(state, action)=>{
            state.value.map((user)=>{
                if(user.id===action.payload.id){
                    user.username=action.payload.username;
                }
            })
        }
    }
})

export const {addUser, deleteUser, upDateUsername} =userSlice.actions;
export default userSlice.reducer;