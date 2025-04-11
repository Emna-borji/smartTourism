// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { destinationReducer } from './destinationReducer';
import { restaurantReducer } from './restaurantReducer';
import hotelsReducer from './hotelReducer';
import museumReducer from './museumReducer';
import guestHouseReducer from './guestHouseReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  destinations: destinationReducer,
  restaurants: restaurantReducer,
  hotels: hotelsReducer,
  museums: museumReducer,
  guestHouses: guestHouseReducer,
  user: userReducer,
});

export default rootReducer;
