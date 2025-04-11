import React, { useState } from "react";
import LoginPage from "./components/Auth/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter here
import RegisterPage from "./components/Auth/RegisterPage";
import RestaurantsPage from "./components/Restaurants/RestaurantsPage";
import HotelDetailsPage from "./components/Hotels/HotelDetailsPage";
import HotelsPage from "./components/Hotels/HotelsPage";
import MuseumsPage from "./components/Museums/MuseumsPage";
import FestivalDetailsPage from "./components/Festivals/FestivalDetailsPage";
import FestivalsPage from "./components/Festivals/FestivalsPage";
import GuestHousesPage from "./components/GuestHouses/GuestHousesPage";
import GuestHouseDetailsPage from "./components/GuestHouses/GuestHouseDetailsPage";
import Search from "./components/Shared/Search";
import RestaurantDetailsPage from "./components/Restaurants/RestaurantDetailsPage";
import AccountSettings from "./components/profile/AccountSettings";
import ChangePassword from "./components/profile/ChangePassword";

const App = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetailsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotel/:id" element={<HotelDetailsPage />} />
        <Route path="/museums" element={<MuseumsPage />} />
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/festival/:festivalId" element={<FestivalDetailsPage />} />
        <Route path="/guest-houses" element={<GuestHousesPage />} />
        <Route path="/guest-house/:guestHouseId" element={<GuestHouseDetailsPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/change-password" element={<ChangePassword />} />

      </Routes>
    </Router>
  );
};

export default App;
