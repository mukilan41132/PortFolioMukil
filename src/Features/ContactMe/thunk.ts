import { createAsyncThunk } from '@reduxjs/toolkit'
import { address } from '../../Constent/constent'
import axios from 'axios'

export const contactme = createAsyncThunk(
    'contactme/ContactMe',
    async (contactme: any, thunkAPI) => {
        try {
            const response = await axios.post(
                `${address}/api/products`,
                contactme,
                {
                    signal: thunkAPI.signal,
                }
            )

            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
)