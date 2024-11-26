// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getProductsThunk = createAsyncThunk('api/products', async () => {
//     const response = await axios.get('https://dummyjson.com/products')
//     console.log('gh',response);
//     return response.data.products
// })

// export const productsSlice = createSlice({
//     name: 'products',
//     initialState: {},
//     reducers: {

//     },
//     extraReducers: builder => {
//         builder
//             .addCase(getProductsThunk.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.products = action.payload
//             })
//             .addCase(getProductsThunk.pending, (state) =>
//               {  state.loading = true}
//             )
//             .addCase(getProductsThunk.rejected, (state, action) => {
//                 state.loading = false
//                 state.error = action.error
//             })

//     }
// })
// export default productsSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Asenkron işlem için thunk
export const getProductsThunk = createAsyncThunk('api/products', async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
});

// Slice oluşturma
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
  
    },
    reducers: {}, // Burada ihtiyacınız olmadığı için boş bırakabilirsiniz.
    extraReducers: (builder) => {
        builder
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.loading = false; // Yükleme tamamlandı
                state.products = action.payload; // Gelen ürün verisini state'e aktar
            })
            .addCase(getProductsThunk.pending, (state) => {
                state.loading = true; // Yükleniyor durumuna geç
            })
            .addCase(getProductsThunk.rejected, (state, action) => {
                state.loading = false; // Yükleme işlemi sonlandırıldı
                state.error = action.error.message; // Hata mesajını state'e ekle
            });
    }
});

export default productsSlice.reducer;
