import { BrowserRouter, Routes, Route } from "react-router-dom";
// import  from "./pages/AllMeetups";
// import NewMeetupPage from "./pages/NewMeetup";
// import FavoritesPage from "./pages/Favorites";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Stakeholders from "./components/Stakeholders";
import Projects from "./components/Projects";
import "./styles/navbar.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          
          <Route path="/stakeholders" element={<Stakeholders />} />
          <Route path="/home" element={<Projects />} />

          {/* <Route path="/new-meetup" element={<NewMeetupPage />} /> */}
          {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
