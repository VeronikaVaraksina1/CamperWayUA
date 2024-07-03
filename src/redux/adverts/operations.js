import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6685321db3f57b06dd4bc125.mockapi.io/api";

export const fetchAdverts = createAsyncThunk("adverts/fetchAdverts", async (_, thunkAPI) => {
  try {
    const data = await axios.get("/advert");
    console.log(data);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})