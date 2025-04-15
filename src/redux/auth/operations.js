import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (value) => {
    axios.defaults.headers.common.Authorization = value;
};


export const register = createAsyncThunk("auth/register",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", userData);
            setAuthHeader(`Bearer ${response.data.token}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const login = createAsyncThunk("auth/login",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", userData);
            setAuthHeader(`Bearer ${response.data.token}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logout = createAsyncThunk("auth/logout",
    async () => {
        await axios.post("/users/logout");
        setAuthHeader("");
    }
)
export const refreshUser = createAsyncThunk("auth/refresh",
    async (_, thunkAPI) => {
        try {
            const getStateToken = thunkAPI.getState();
            setAuthHeader(`Bearer ${getStateToken.auth.token}`);
            const response = await axios.get("/users/current");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        }
    }
)