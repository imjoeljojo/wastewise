import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import UserPage from "./components/UserPage";
import LocationPage from "./components/LocationPage";
import Reporting from "./components/Reporting";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/userdashboard" element={<UserPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/reporting" element={<Reporting />} />
    </Routes>
  );
}

export default App;
