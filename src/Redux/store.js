import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from './AuthSlice/AuthSlice'

export const store= configureStore({
  reducer: {
    UserSlice
  },
})

