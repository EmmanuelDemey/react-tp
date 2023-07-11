import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
    name: 'counter',
    initialState: {
        people: []
    },
    reducers: {
        like(state, action: PayloadAction<any>){

        },
        dislike(state, action: PayloadAction<any>){

        }
    }
})



const store = configureStore({
  reducer: {
    counter: counter.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export const getAllLikesCount = (state: RootState) => {
    return state.counter.people.length;
}

export default store