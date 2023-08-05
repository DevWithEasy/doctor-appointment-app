import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
    name : 'appointment',
    initialState : {
        appointments : []
    },
    reducers : {
        addAppointments : (state,action)=>{
            state.appointments = action.payload
        },
        updateAppointments : (state,action)=>{
            let data = []
            state.appointments.forEach(appointment=>{
                if(appointment._id === action.payload.id){
                    data.push({
                        ...appointment,status: action.payload.status
                    })
                }else{
                    data.push(appointment)
                }
            })
            state.appointments = data
        }
    }
})

export const {addAppointments,updateAppointments} = appointmentSlice.actions
export default appointmentSlice.reducer