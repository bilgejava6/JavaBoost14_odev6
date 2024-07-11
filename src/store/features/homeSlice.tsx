import { createSlice } from "@reduxjs/toolkit"

// 1- initialState değerleri
const initialState= {

}

// 2- fetch işlemleri için AsyncThunk


// 3- Sclice için oluturma parametreleri
const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {},
    extraReducers:()=>{}
});

export default homeSlice.reducer;
