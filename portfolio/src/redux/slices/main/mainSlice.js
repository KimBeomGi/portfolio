import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projectPageNum: 0
}

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    handleProjectPageNum: (state, action) => {
      state.projectPageNum += action.payload
    },
  },
})

export const { handleProjectPageNum } = mainSlice.actions

export default mainSlice.reducer