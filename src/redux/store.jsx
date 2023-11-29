import { combineReducers, configureStore } from "@reduxjs/toolkit"
import Productslicer from "./Productslicer"

const reducer = combineReducers(
    {
        produits : Productslicer
    }
)


const store = configureStore({
    reducer
})
export default store;