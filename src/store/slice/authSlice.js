import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isLoading : false,
        isAuth : false,
        user : {},
        doctor : {},
        doctors : [],
        specializations : [],
        random : 0
    },
    reducers : {
        loading : (state,action)=>{
            state.isLoading = true;
        },
        addAuth : (state,action)=>{
            state.isAuth = true;
            state.user = action.payload
        },
        removeAuth : (state,action)=>{
            state.isAuth = false;
            state.user = {}
            state.doctor = {}
        },
        addDoctor : (state,action)=>{
            state.doctor = action.payload
        },
        addDoctors : (state,action)=>{
            state.doctors = action.payload
        },
        addSpecializations : (state,action)=>{
            state.specializations = action.payload
        },
        refresh : (state,action)=>{
            state.random = action.payload
        },
    }
})

export const {loading,addAuth,removeAuth,addDoctor,addDoctors,addSpecializations,refresh} = authSlice.actions
export default authSlice.reducer