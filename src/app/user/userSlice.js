import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: [],
        error: ''
    }

    //call reducer here
})

export default userSlice.reducer