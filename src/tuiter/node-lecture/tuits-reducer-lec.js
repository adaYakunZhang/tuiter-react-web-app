import {createSlice} from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findAllTuitsThunk, updateTuitThunk} from "./tuits-thunks";

const initialState = {
    tuits: [
        {_id: '123', tuit: 'Tuit 123'},
        {_id: '234', tuit: 'Tuit 234'},
        {_id: '345', tuit: 'Tuit 345'}
    ],
    loading: false
}

const tuitsReducerLec = createSlice({
    name: 'tuits',
    initialState,
    reducer: {
        findAllTuits: (state, action) => {
            state.tuits = action.payload
        }
    },
    extraReducers: {
        [findAllTuitsThunk.pending]: (state, action) => {
            state.loading = true
            state.tuits = []
        },
        [findAllTuitsThunk.fulfilled]: (state, action) => {
            state.tuits = action.payload
            state.loading = false
        },
        [deleteTuitThunk.fulfilled]: (state, {payload}) => {
            state.tuits = state.tuits.filter(tuit => tuit._id !== payload)
        },
        [createTuitThunk.fulfilled]: (state, {payload}) => {
            state.tuits.push(payload)
        },
        [updateTuitThunk.fulfilled]: (state, {payload}) => {
            const tuitIndex = state.tuits.findIndex(tuit => tuit._id === payload.id)
            state.tuits[tuitIndex] = payload
        }
    }
})

export default tuitsReducerLec.reducer;