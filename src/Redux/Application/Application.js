import { createSlice } from "@reduxjs/toolkit";
import { useGetProductQuery } from "../Services/AuthAPi";

const initialState = {
  product: null,
  filteredProduct: null,
  isLoading: false,
  error: null,
};

const getProductSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    loadApplicationStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },

    applicationSuccess: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    applicationFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    filterProduct: (state, action) => {
      state.filteredProduct = action.payload;
      state.error = false;
      state.isLoading = false;
    },
  },
});

export const {
  loadApplicationStart,
  applicationFailure,
  applicationSuccess,
  filterProduct,
} = getProductSlice.actions;
export default getProductSlice.reducer;

const response = useGetProductQuery()

export const loadProduct = async (dispatch) => {
  try {
    dispatch(loadApplicationStart())
    const data = await response()
    if(data.status === "ok") {
        dispatch(applicationSuccess(data))
    }
  } catch (error) {
    dispatch(applicationFailure())
  }
};
