import { REGISTER_USER_REQUEST, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS, LOGIN_USER_FAIL, REGISTER_USER_FAIL } from "../constants/authConstants";

// const initialState = { user: null, loading: false, error: null };

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//     case SIGNUP_REQUEST:
//       return { ...state, loading: true, error: null };
//     case LOGIN_SUCCESS:
//     case SIGNUP_SUCCESS:
//       return { loading: false, user: action.payload, error: null };
//     case LOGIN_FAIL:
//     case SIGNUP_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };


const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
      // When a register or login request is made, set loading to true
      case REGISTER_USER_REQUEST:
      case LOGIN_USER_REQUEST:
          return { ...state, loading: true };

      // When registration or login is successful, save user info and set loading to false
      case REGISTER_USER_SUCCESS:
      case LOGIN_USER_SUCCESS:
          return { ...state, loading: false, userInfo: action.payload };

      // When registration or login fails, store the error message and set loading to false
      case REGISTER_USER_FAIL:
      case LOGIN_USER_FAIL:
          return { ...state, loading: false, error: action.payload };

      // Default case, return the current state if no action matches
      default:
          return state;
  }
};



