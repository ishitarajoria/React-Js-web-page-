import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

import "./App.css";

function App() {
  const [car, setCar] = useState({});
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setCar={setCar} />} />
        <Route path="/details" element={<DetailsPage car={car} />} />
      </Routes>
    </Router>
  );
}

export default App;
