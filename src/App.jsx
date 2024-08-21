
import { Routes, Route } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashNav from "./Pages/Dashboard/DashNav";
import DashUnlocked from "./Pages/Dashboard/DashUnlocked";
import DashProgress from "./Pages/Dashboard/DashProgress";
import LandingPage from "./Components/LandingPage/Page";
import About from "./Components/LandingPage/About";
import HeroOne from "./Pages/Dashboard/HeroOne";

function App() {
  return (
    <Theme>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/DashProgress" element={<DashProgress />} />
        <Route path="/DashUnlocked" element={<DashUnlocked />} />
        <Route path="/DashNav" element={<DashNav />} />
        <Route path="/HeroOne" element={<HeroOne />} />
      </Routes>
    </Theme>
  );
}

export default App;
