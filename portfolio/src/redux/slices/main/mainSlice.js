import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projectPageNum: 0,
  navPageName: 'home',
}

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    handleProjectPageNum: (state, action) => {
      state.projectPageNum += action.payload
    },
    handleChangeProjectPageNum: (state, action) => {
      state.projectPageNum = action.payload
    },
    handleNavPageName: (state, action) => {
      state.navPageName = action.payload
    }
  },
})

export const { handleProjectPageNum, handleChangeProjectPageNum, handleNavPageName } = mainSlice.actions

export default mainSlice.reducer