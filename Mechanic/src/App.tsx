import Home from "./pages/Home";
import BookService from "./pages/BookService";
import Schedule from "./pages/Schedule";
import ScheduleService from "./pages/ScheduleService";
import About from "./pages/About";
import Locations from "./pages/Locations";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/BookService" element={<BookService />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/ScheduleService" element={<ScheduleService />} />
      <Route path="/About" element={<About />} />
      <Route path="/Locations" element={<Locations />} />
    </Routes>
  );
}

export default App;
