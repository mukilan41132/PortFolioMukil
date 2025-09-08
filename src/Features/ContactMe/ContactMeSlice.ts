import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { contactme } from './thunk'
 
interface ContactMeState {
  data: any | null
  loading: boolean
  error: string | null
}

 
const initialState: ContactMeState = {
  data: null,
  loading: false,
  error: null,
}

export const contactmeSlice = createSlice({
  name: 'contactMe',
  initialState,
  reducers: {
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(contactme.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(contactme.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(contactme.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default contactmeSlice.reducer
