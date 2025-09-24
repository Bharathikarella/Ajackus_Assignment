import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiMethods } from "../../helper/ApiMethods";

export const fetchUsersThunk = createAsyncThunk(
  "user/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ApiMethods.GET(
        "https://jsonplaceholder.typicode.com/users"
      );

      // If ApiMethods already returns data, use response directly
      return response.data || response;
    } catch (error) {
      // Always return serializable error
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addUserThunk = createAsyncThunk(
  "user/addData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await ApiMethods.POST(
        "https://jsonplaceholder.typicode.com/users",
        data
      );
      return response.data || response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const editUserThunk = createAsyncThunk(
  "user/editData",
  async ({ id, values }, { rejectWithValue }) => {
    try {
      const response = await ApiMethods.PUT(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        values
      );
      return response.data || response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  "user/deleteData",
  async (id, { rejectWithValue }) => {
    try {
      const response = await ApiMethods.DELETE(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return response.data || response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
