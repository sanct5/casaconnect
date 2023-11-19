import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Loguin } from "./components/loguin/Loguin";
import { Register } from "./components/register/Register";
import { SearchBar } from "./components/searchBar/SearchBar";
import { RentProperty } from "./components/rentProperty/RentProperty";
import { Property } from "./components/property/Property";

function App() {
  return (
    <>
      <Routes>
        <Route path="/loguin" element={<Loguin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      <SearchBar />

      <Routes>
        <Route path="/rent" element={<RentProperty />} />
        <Route path="/home" element={<Home />} />
        <Route path="/property" element={<Property />} />
      </Routes>
    </>
  );
}

export default App;
