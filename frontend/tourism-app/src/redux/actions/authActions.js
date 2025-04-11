import axios from "axios";
import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST, LOGIN_USER_FAIL } from "../constants/authConstants";

// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: LOGIN_REQUEST });
//     const config = { headers: { "Content-Type": "application/json" } };
//     const { data } = await axios.post("/api/auth/login", { email, password }, config);
//     dispatch({ type: LOGIN_SUCCESS, payload: data });
//     localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAIL,
//       payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//     });
//   }
// };

// export const signup = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: SIGNUP_REQUEST });

//      // Make API call to backend for registration
//     const { data } = await axios.post('http://127.0.0.1:8000/api/users/register/', userData);

//     dispatch({ type: REGISTER_USER_SUCCESS, payload: data });

//     // const config = { headers: { "Content-Type": "application/json" } };
//     // const { data } = await axios.post("/api/auth/register", { name, email, password }, config);
//     // dispatch({ type: SIGNUP_SUCCESS, payload: data });
//     // localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: SIGNUP_FAIL,
//       payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//     });
//   }
// };



// export const registerUser = (userData) => async (dispatch) => {
//   try {
//       dispatch({ type: REGISTER_USER_REQUEST });

//       // Make API call to backend for registration
//       const { data } = await axios.post('http://127.0.0.1:8000/api/users/register/', userData);

//       dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
//   } catch (error) {
//       dispatch({
//           type: REGISTER_USER_FAIL,
//           payload: error.response ? error.response.data : error.message,
//       });
//   }
// };


// Register User
export const registerUser = (userData) => async (dispatch) => {
  try {
      dispatch({ type: REGISTER_USER_REQUEST });

      // Make API call to backend for registration
      const config = {
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
        },
      };
      console.log('User Data:', userData);
      const { data } = await axios.post(
        'http://localhost:8000/api/register/',
        userData,
        config
      );
      console.log('User registered successfully:', data);

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
      dispatch({
          type: REGISTER_USER_FAIL,
          payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
      });
  }
};




// Login User
export const loginUser = (userData) => async (dispatch) => {
  try {
      dispatch({ type: LOGIN_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const { data } = await axios.post(
        'http://localhost:8000/api/login/',
        userData,
        config
      );

      // ✅ Store token in localStorage
    localStorage.setItem('token', data.access_token); // or data.access if you're using access/refresh tokens

    localStorage.setItem('userInfo', JSON.stringify(data.user));
  

      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
      dispatch({
          type: LOGIN_USER_FAIL,
          payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
      });
  }
};