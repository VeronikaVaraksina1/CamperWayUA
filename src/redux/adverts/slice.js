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
    items: [],
    favorites: [],
    loading: false,
    error: false,
  },
  reducers: {
    addFavorite: (state, action) => {
      const advert = action.payload;

      if (!state.favorites.find(item => item._id === advert._id)) {
        state.favorites.push(advert);
      }
    },
    deleteFavorite: (state, action) => {
      const id = action.payload;
      state.favorites = state.favorites.filter(item => item._id !== id);
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAdverts.pending, handlePending).addCase(fetchAdverts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      if (action.meta.arg.page === 1) {
        state.items = action.payload;
      } else {
        state.items = [...state.items, ...action.payload];
      }
    }).addCase(fetchAdverts.rejected, handleRejected)
  }
});

export const { addFavorite, deleteFavorite } = advertsSlice.actions;
export default advertsSlice.reducer;