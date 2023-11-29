import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//createasyncthunk pour gerer data de api dune maniere asyncrone dans le globale state de redux
export const getProducts = createAsyncThunk(
  "produits/geProduits", //il depend premier paramatere contient le nom de slice / l action , la function async de recuperation des produits de l api
  async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products");
    return res.data;
  }
);
// asyncThunc depend l ajout de extrareducers en slicer
// extrereducer a contient un function parametre par (builder)
const ProduitSlice = createSlice({
  name: "produits",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      //on ajoute une case au builder avec la function getProducts qui obtenu l api (fullfild,bending,reject) en plus apres l aveirgule on traite le state et l action et on remplie l' initial state avec le payload obtenu d api
    });
  },
});
export const {} = ProduitSlice.actions;
export default ProduitSlice.reducer;
