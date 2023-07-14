import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk("user/fetchUsers", async() => {
    return axios.get('https://649b1169bf7c145d0239f5b2.mockapi.io/api/r1/userlist')
        .then(res => res.data)
})

export const addUser = createAsyncThunk("user/addUser", async(values) => {
    return fetch("https://649b1169bf7c145d0239f5b2.mockapi.io/api/r1/userlist", {
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

export const loginUser = createAsyncThunk("user/loginUser", async(userCredential) => {
    return fetch("https://649b1169bf7c145d0239f5b2.mockapi.io/api/r1/userlist", {
        method: "POST",
        headers: { Accept: "application/json", ContentType: "application/json" },
        body: JSON.stringify(userCredential)
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
    extraReducers: builder => {
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

        //login user
        builder.addCase(loginUser.pending, state => {
            state.loading = true
            state.error = ''
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ''
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.user = []
            console.log(action.error.message)
            if (action.error.message === 'Request failed with status code 401') {
                state.error = 'Access denied! Invalid Credentials'
            } else {
                state.error = action.error.message
            }
        })
    }
})

export default userSlice.reducer