import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk("auth/register",
    async (userData, thunkAPI) => {
        try {
            const response = axios.post("/users/signup", userData)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const login = createAsyncThunk("auth/login",
    async (userData, thunkAPI) => {
        try {
            const response = axios.post("/users/login", userData)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logout = createAsyncThunk("auth/logout",
    async () => {
        await axios.post("/users/logout")
    }
)