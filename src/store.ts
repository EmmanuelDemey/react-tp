import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'

type CounterState = {
    people: any[]
}

const counter = createSlice({
    name: 'counter',
    initialState: {
        people: []
    },
    reducers: {
        like(state: CounterState, action: PayloadAction<any>){
            state.people.push(action.payload)
        },
        dislike(state, action: PayloadAction<any>){
            const index = state.people.findIndex((p: any) => p.name === action.payload.name)
            state.people.splice(index, 1)
        }
    }
})



const store = configureStore({
  reducer: {
    counter: counter.reducer
  }
})


export const { like, dislike } = counter.actions;

export type RootState = ReturnType<typeof store.getState>

export const getAllLikesCount = (state: RootState) => {
    return state.counter.people.length;
}

export const isLiked = (state: RootState, person: any): boolean => {
    return state.counter.people.some((p: any) => p.name === person.name)
}

export default store