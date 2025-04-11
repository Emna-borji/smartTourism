import axios from "axios";
import { FETCH_DESTINATIONS_FAIL, FETCH_DESTINATIONS_REQUEST, FETCH_DESTINATIONS_SUCCESS } from "../constants/destinationConstants";

// Action Creators
export const fetchDestinations = () => async (dispatch) => {
    try {
      dispatch({ type: FETCH_DESTINATIONS_REQUEST });
  
      const response = await axios.get('http://127.0.0.1:8000/api/tourism/destinations/');
      
      dispatch({
        type: FETCH_DESTINATIONS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DESTINATIONS_FAIL,
        payload: error.message,
      });
    }
  };