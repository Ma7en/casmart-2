import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "./slices/shoppingSlice";

export default configureStore({
    reducer: {
        shoppingList: shoppingSlice,
    },
});
