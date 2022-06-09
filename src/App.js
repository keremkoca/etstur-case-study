import { useState, useEffect } from "react";
import { CreateHotel, HotelList } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

function App() {
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("hotelList"));
    if (storedList) setHotelList(storedList);
  }, []);

  useEffect(() => {
    if (hotelList.length > 0)
      localStorage.setItem("hotelList", JSON.stringify(hotelList));
    else localStorage.removeItem("hotelList");
  }, [hotelList]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HotelList hotelList={hotelList} setHotelList={setHotelList} />
            }
            setHotelList={setHotelList}
          />
          <Route
            path="create-hotel"
            element={
              <CreateHotel hotelList={hotelList} setHotelList={setHotelList} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
