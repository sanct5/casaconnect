import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Loguin } from "./components/loguin/Loguin";
import { Register } from "./components/register/Register";
import { SearchBar } from "./components/searchBar/SearchBar";
import { RentProperty } from "./components/rentProperty/RentProperty";
import { Property } from "./components/property/Property";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';

function App() {
  const location = useLocation();
  const showSearchBar = ["/rent", "/home", "/property"].some(path => location.pathname.startsWith(path));

  return (
    <>
      <ToastContainer />
      {showSearchBar && <SearchBar />}
      
      <Routes>
        <Route path="/" element={<Loguin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rent" element={<RentProperty />} />
        <Route path="/home" element={<Home />} />
        <Route path="/property/:id" element={<Property />} />
      </Routes>
    </>
  );
}

export default App;
