import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Loguin } from "./components/loguin/Loguin";
import { Register } from "./components/register/Register";
import { SearchBar } from "./components/searchBar/SearchBar";

function App() {
  return (
    <>
      <SearchBar />
      <Routes>
        <Route path="/loguin" element={<Loguin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
