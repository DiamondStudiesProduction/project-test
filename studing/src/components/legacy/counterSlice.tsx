import { createSlice } from '@reduxjs/toolkit';



 export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        INCREMENT: (state) => {
            state.count += 1
        },
        DISCREMENT: (state) => {
            state.count -= 1
        },
        X5: (state, action) => {
            console.log(action.payload.target)
        }
    }
})

export const {INCREMENT, DISCREMENT, X5} = CounterSlice.actions


