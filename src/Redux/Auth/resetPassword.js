import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    otp: null,
    password: null
}

const resetPasswordSlice = createSlice({
    name: "resetPassword",
    initialState,

    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setotp: (state, action) => {
            state.otp = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        clearField: (state) => {
            state.email = null,
            state.otp = null,
            state.password = null
        }
        
    },
})

export const user = (state) => state.resetPassword.email

export const {setEmail, setotp, setPassword, clearField} = resetPasswordSlice.actions
export default resetPasswordSlice.reducer