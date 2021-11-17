import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './utils';

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        numberOfGames: 0,
        totalMoves: 0,
    },
    reducers: {
        updateMoves: (state, action) => {
            state.totalMoves += action.payload;
        },
        incrementGames: (state) => {
            state.numberOfGames++;
        }
    },
})

export const { incrementGames, updateMoves } = gameSlice.actions

export const gamesSelector = (state: RootState): number => {
    return state.gameReducer.numberOfGames;
}

export const movesSelector = (state: RootState): number => {
    return state.gameReducer.totalMoves;
}

export const averageMovesSelector = (state: RootState): number => {
    return state.gameReducer.totalMoves / state.gameReducer.numberOfGames;
}

export default gameSlice.reducer

