import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Loguin } from "./components/loguin/Loguin";
import { Register } from "./components/register/Register";
import { SearchBar } from "./components/searchBar/SearchBar";
import { RentProperty } from "./components/rentProperty/RentProperty";
import { Property } from "./components/property/Property";
import property from "./components/property/propertyExample";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();
  const showSearchBar = ["/rent", "/home", "/property"].includes(location.pathname);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Loguin />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {showSearchBar && <SearchBar />}

      <Routes>
        <Route path="/rent" element={<RentProperty />} />
        <Route path="/home" element={<Home />} />
        <Route path="/property" element={<Property property={property} />} />
      </Routes>
    </>
  );
}

export default App;

