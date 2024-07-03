import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    adverts: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchAdverts.pending, handlePending).addCase(fetchAdverts.fulfilled, (state, action) =>{
      state.loading = false;
      state.error = null;
      state.adverts = action.payload.adverts;
    }).addCase(fetchAdverts.rejected, handleRejected)
  }
});

export default advertsSlice.reducer;