import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk("user/fetchUsers", async() => {
    return axios.get('http://localhost:5000/api/user')
        .then(res => res.data)
})

export const addUser = createAsyncThunk("user/addUser", async(values) => {
    return fetch("http://localhost:5000/api/adduser", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            username: values.username,
            email: values.email,
            phone: values.phone,
            address: values.address,
            password: values.password
        })

    }).then((res) => res.json())

})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: [],
        error: '',
        isSuccess: ''
    },

    //call reducer here
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ''
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.error = action.error.message
        })

        // add user
        builder.addCase(addUser.pending, state => {
            state.loading = true
            state.error = ''
        })

        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = []
            state.isSuccess = action.payload
        })

        builder.addCase(addUser.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.error = action.error.message

        })

    }
})


export default userSlice.reducer