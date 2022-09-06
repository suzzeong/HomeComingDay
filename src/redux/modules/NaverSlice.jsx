// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { getCookie, setCookie } from '../../shared/cookies';
// import Cookies from "universal-cookie";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
  
// const cookies = new Cookies();

// const initialState = {
//     // naver: config,
//     token: false,
//     isLogin: false,
//     error: null,
//   };

// export const __loginCheck = createAsyncThunk("Login/loginCheck", async (payload, thunkAPI) => {
//   try {
//     const accessToken = cookies.get("Authorization");
//     console.log(accessToken)
//     const data = await axios.get(`${BASE_URL}/naverUserInfo`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     return thunkAPI.fulfillWithValue(data.data);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });
  
// export const __naverLogin = createAsyncThunk(
//   'NAVER_LOGIN',
//   async (payload, thunkAPI) => {
//     try {
//     //   console.log(data);
//     //   const data = await axios.post(`${BASE_URL}/naverUserInfo`, payload);
//     const data = await axios.post(`${BASE_URL}/naverUserInfo`, {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${getCookie('accessToken')}`,
//           },
//     });
//       console.log(data);
//       setCookie('accessToken', `${data.data.data.accessToken}`);
//       console.log(data.data);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const NaverSlice = createSlice({
//   name: 'NaverSlice',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [__naverLogin.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [__naverLogin.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.user = action.payload;
//       state.isLogin = true;
//     },
//     [__naverLogin.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export default NaverSlice;