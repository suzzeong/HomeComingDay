import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from '../../shared/cookies';


const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
    calendarsComments:[],
    calendarsReplyCommentList:[],
    calendarfind:[],
    calendars: [],
    calendarPopular:[],
    heart:[],
    joinPeopleList :[],
    calendarJoin:[],
    isLoading: false,
    error: null,
};

export const __getCalendar = createAsyncThunk("calendars/getCalendar", async (payload, thunkAPI) => {
    try {
      const data = await axios({
        method: 'get',
        url: `${BASE_URL}/article/calendar`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      });
      // console.log(data)
        return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
        // console.log('error', error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const __getDetailCalendar = createAsyncThunk("calendars/getDetailcalendars", async (payload, thunkAPI) => {
  try {
    const data = await axios({
      method: 'get',
      url: `${BASE_URL}/article/calendar/${payload}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
        // RefreshToken : getCookie('refreshToken')
      },
    });
    // console.log(data)
      return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
      // console.log('error', error);
      return thunkAPI.rejectWithValue(error);
  }
});

export const __getPopularCalendar = createAsyncThunk("calendar/getPopularcalendar", async (payload, thunkAPI) => {
  try {
    const data = await axios({
      method: 'get',
      url: `${BASE_URL}/article/calendar/popular`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
        // RefreshToken : getCookie('refreshToken')
      },
    });
    // console.log(data.data)
      return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
      // console.log('error', error);
      return thunkAPI.rejectWithValue(error);
  }
});

export const __postCalendar = createAsyncThunk("calendars/postcalendars", async (payload, thunkAPI) => {
  try {


    const data = await axios({
      method: 'post',
      url: `${BASE_URL}/article/calendar`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
        // RefreshToken : getCookie('refreshToken')
      },
      data: payload
    });
    // console.log(data)
      return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
      // console.log('error', error);
      return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteCalendar = createAsyncThunk("calendars/deleteCalendar", async (payload, thunkAPI) => {
  try {
    const data = await axios({
      method: 'delete',
      url: `${BASE_URL}/article/calendar/${payload}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    // console.log('error', error)
    return thunkAPI.rejectWithValue(error);
  }
}
);

export const __updateCalendar = createAsyncThunk("calendars/updateCalendar", async (payload, thunkAPI) => {
  try {
    const data = await axios({
      method: 'put',
      url: `${BASE_URL}/article/calendar/${payload.id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      data: payload
    });
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    // console.log('error', error)
    return thunkAPI.rejectWithValue(error.message);
  }
}
);

export const __postCalendarComment = createAsyncThunk("comments/postHelpComment", async (payload, thunkAPI) => {
  try {
    // console.log("payload" , payload)
    const data = await axios({
      method: 'post',
      url: `${BASE_URL}/article/calendar/comment/${payload.articleId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      data: payload
    });
    
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteCalendarComment = createAsyncThunk("comments/deleteHelpComment", async (payload, thunkAPI) => {
  try {
    // console.log(payload)
    const data = await axios({
      method: 'delete',
      url: `${BASE_URL}/article/calendar/${payload.articleId}/comment/${payload.commentId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },

    });
  //   console.log(payload)
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
}
);

export const __updateCalendarComment = createAsyncThunk("comment/updateHelpComment", async (payload, thunkAPI) => {
  try {
    const data = await axios({
      method: 'put',
      url: `${BASE_URL}/article/calendar/${payload.articleId}/comment/${payload.commentId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      data: payload
    });
    // console.log("payload",payload)
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    // console.log(payload)
    return thunkAPI.rejectWithValue(error);
  }
}
);

//대댓글
export const __postCalendarReplyComment = createAsyncThunk("comments/postcalendarReplyComment", async (payload, thunkAPI) => {
  try {
    // console.log("payload" , payload)
    const data = await axios({
      method: 'post',
      url: `${BASE_URL}/article/calendar/${payload.articleId}/comment/${payload.commentId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      data: payload
    });
    
    // console.log(data)
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteCalendarReplyComment = createAsyncThunk("comments/deletecalendarReplyComment", async (payload, thunkAPI) => {
  try {
    // console.log("payload" , payload)
    const data = await axios({
      method: 'delete',
      url: `${BASE_URL}/article/calendar/${payload.articleId}/comment/${payload.commentId}/${payload.childCommentId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    // console.log(data)
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __updateCalendarReplyComment = createAsyncThunk("comments/updatecalendarReplyComment", async (payload, thunkAPI) => {
  try {
    // console.log("payload" , payload)
    const data = await axios({
      method: 'patch',
      url: `${BASE_URL}/article/calendar/${payload.articleId}/comment/${payload.commentId}/${payload.childCommentId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      data: payload
    });
    // console.log(data)
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});


// // 날짜 - get
// export const __getDate = createAsyncThunk("dates/getDate", async (payload, thunkAPI) => {
//   try {
//       const data = await axios.get("http://localhost:3001/dates")
//       // console.log(data.data)
//       return thunkAPI.fulfillWithValue(data.data);
//   } catch (error) {
//       console.log('error', error);
//       return thunkAPI.rejectWithValue(error);
//   }
// });

// // 날짜 - post
// export const __postDate = createAsyncThunk("dates/postDate", async (payload, thunkAPI) => {
//   console.log('payload', payload)
//   try {
//     const data = await axios.post("http://localhost:3001/dates", payload);
//     console.log('data', data)
//     return thunkAPI.fulfillWithValue(data.data);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

//   // 시간 - get
//   export const __getTime = createAsyncThunk("calendars/getTime", async (payload, thunkAPI) => {
//     try {
//         const data = await axios.get("http://localhost:3001/calendars")
//         // console.log(data.data)
//         return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       console.log('error', error);
//       return thunkAPI.rejectWithValue(error);
//     }
// });

//   // 시간 - post
// export const __postTime = createAsyncThunk("calendars/postTime", async (payload, thunkAPI) => {
// console.log('payload', payload)
// try {
//     const data = await axios.post("http://localhost:3001/calendars", payload);
//     console.log('data', data)
//     return thunkAPI.fulfillWithValue(data.data);
// } catch (error) {
//     return thunkAPI.rejectWithValue(error);
// }
// });

// 좋아요
export const __postCalendarHeart = createAsyncThunk(
  'postCalendarHeart',
  async (payload, thunkAPI) => {
    try {
      const data = await axios({
        method: 'post',
        url: `${BASE_URL}/article/calendar/${payload.articleId}/heart`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
        data: payload,
      });
      // console.log(data);
      // console.log('data', data.data);
      // console.log(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//참여하기
export const __getJoin = createAsyncThunk("calendars/getCalendarJoin", async (payload, thunkAPI) => {
  try {
    const data = await axios({
      method: 'get',
      url: `${BASE_URL}/article/calendar/join/${payload}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    // console.log(data)
      return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
      // console.log('error', error);
      return thunkAPI.rejectWithValue(error);
  }
});


export const __postJoin = createAsyncThunk(
  'postCalendarJoin',
  async (payload, thunkAPI) => {
    try {
      const data = await axios({
        method: 'post',
        url: `${BASE_URL}/article/calendar/join/${payload.articleId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
        data: payload,
      });
      // console.log(data);
      // console.log('data', data.data);
      // console.log(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const CalendarSlice = createSlice({
    name: "calendars",
    initialState,
    reducers: {},
    extraReducers: {
      [__getCalendar.pending]: (state) => {
        state.isLoading = true;
      },
      [__getCalendar.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.calendars = action.payload;
      },
      [__getCalendar.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

      [__getDetailCalendar.pending]: (state) => {
        state.isLoading = true;
      },
      [__getDetailCalendar.fulfilled]: (state, action) => {
        state.isLoading = false;
        // console.log(action.payload)
        state.calendarfind = action.payload;
      },
      [__getDetailCalendar.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },


      [__getPopularCalendar.pending]: (state) => {
        state.isLoading = true;
      },
      [__getPopularCalendar.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.calendarPopular = action.payload;
      },
      [__getPopularCalendar.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

      [__postCalendar.pending]: (state) => {
        state.isLoading = true;
      },
      [__postCalendar.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.calendars.push(action.payload);
      },
      [__postCalendar.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      [__deleteCalendar.pending]: (state) => {
        state.isLoading = true;
      },
      [__deleteCalendar.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.calendars = state.calendars.filter(calendars => calendars.id !== action.payload)
      },
      [__deleteCalendar.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

      [__updateCalendar.pending]: (state) => {
        state.isLoading = true;
      },
      [__updateCalendar.fulfilled]: (state, action) => {
        state.isLoading = false;
        // console.log('action', action)
        // console.log('action.payload', action.payload)
        state.calendars = state.calendars.map((calendar) => {
          if (calendar.id === action.payload.id) {
            calendar = action.payload;
          }
          return calendar;
        })
      },
      [__updateCalendar.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

      [__postCalendarComment.pending]: (state) => {
        state.isLoading = true;
      },
      [__postCalendarComment.fulfilled]: (state, action) => {
        state.isLoading = false; 
        // console.log(action.payload)
        state.calendarsComments.push(action.payload);
      },
      [__postCalendarComment.rejected]: (state, action) => {
        state.isLoading = false; 
        state.error = action.payload;
      },

      [__deleteCalendarComment.pending]: (state) => {
        state.isLoading = true;
      },
      [__deleteCalendarComment.fulfilled]: (state, action) => {
        state.isLoading = false;
        // console.log(state.comment)
        // console.log(action)
        state.calendarsComments = state.calendarsComments.filter(comment => comment.id !== action.payload)
      },
      [__deleteCalendarComment.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
  
      // updateComment
      [__updateCalendarComment.pending]: (state) => {
        state.isLoading = true;
      },
  
      [__updateCalendarComment.fulfilled]: (state, action) => {
        state.isLoading = false;
        // console.log('action', action)
        // console.log('comment', state.commentList)
        state.calendarsComments = state.calendarsComments.map((comment) => {
          if (comment.id === action.payload.id) {
            comment.comment = action.payload.comment;
          }
          return comment;
        })
  
      },
      [__updateCalendarComment.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

      //대댓글
      [__postCalendarReplyComment.pending]: (state) => {
        state.isLoading = true;
      },
      [__postCalendarReplyComment.fulfilled]: (state, action) => {
        state.isLoading = false; 
        // console.log(action.payload)
        state.calendarsReplyCommentList.push(action.payload);
      },
      [__postCalendarReplyComment.rejected]: (state, action) => {
        state.isLoading = false; 
        state.error = action.payload;
      },

      [__deleteCalendarReplyComment.pending]: (state) => {
        state.isLoading = true;
      },
      [__deleteCalendarReplyComment.fulfilled]: (state, action) => {
        state.isLoading = false;
        // console.log(state.comment)
        // console.log(action)
        state.calendarsReplyCommentList = state.calendarsReplyCommentList.filter(comment => comment.id !== action.payload)
      },
      [__deleteCalendarReplyComment.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      [__updateCalendarReplyComment.pending]: (state) => {
        state.isLoading = true;
      },
  
      [__updateCalendarReplyComment.fulfilled]: (state, action) => {
        state.isLoading = false;
        // console.log('action', action.payload)
        // console.log('comment', state.childCommentList)
        state.calendarsReplyCommentList = state.calendarsReplyCommentList.map((comment) => {
          if (comment.childCommentId === action.payload.childCommentId) {
            comment.content = action.payload.content;
          }
          return comment;
        })
  
      },


      // // 날짜
      // [__getDate.pending]: (state) => {
      //   state.isLoading = true;
      // },
      // [__getDate.fulfilled]: (state, action) => {
      //   state.isLoading = false;
      //   state.dates = action.payload;
      // },
      // [__getDate.rejected]: (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // },
      // [__postDate.pending]: (state) => {
      //   state.isLoading = true;
      // },
      // [__postDate.fulfilled]: (state, action) => {
      //   state.isLoading = false;
      //   state.dates.push(action.payload);
      // },
      // [__postDate.rejected]: (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // },

      // // 시간
      // [__getTime.pending]: (state) => {
      //   state.isLoading = true;
      // },
      // [__getTime.fulfilled]: (state, action) => {
      //   state.isLoading = false;
      //   state.calendars = action.payload;
      // },
      // [__getTime.rejected]: (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // },
      // [__postTime.pending]: (state) => {
      //   state.isLoading = true;
      // },
      // [__postTime.fulfilled]: (state, action) => {
      //   state.isLoading = false;
      //   state.calendars.push(action.payload);
      // },
      // [__postTime.rejected]: (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // },

          // 좋아요
    [__postCalendarHeart.pending]: (state) => {
      state.isLoading = true;
    },
    [__postCalendarHeart.fulfilled]: (state, action) => {
      // console.log('__postHeart.fulfilled', action);
      state.isLoading = false;
      state.heart.unshift(action);
    },
    [__postCalendarHeart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //참여하기
    [__getJoin.pending]: (state) => {
      state.isLoading = true;
    },
    [__getJoin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.calendarJoin = action.payload;
    },
    [__getJoin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },


    [__postJoin.pending]: (state) => {
      state.isLoading = true;
    },
    [__postJoin.fulfilled]: (state, action) => {
      // console.log('__postJoin.fulfilled', action.payload);
      state.isLoading = false;
      state.joinPeopleList.push(action.payload);
    },
    [__postJoin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    },
});

export const {} = CalendarSlice.actions;
export default CalendarSlice.reducer;