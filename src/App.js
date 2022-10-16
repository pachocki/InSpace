import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Destinations from "./Pages/Destinations";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import Contact from "./Pages/Contact";
import SingleRockets from "./Pages/SingleRockets";
import SingleLaunchpad from "./Pages/SingleLaunchpad";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="InSpace" index element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="crew" element={<Crew />} />
        <Route path="contact" element={<Contact />} />
        <Route path="technology" element={<Technology />} />
        <Route path="rockets/:id" element={<SingleRockets />}></Route>
        <Route path="launchpads/:id" element={<SingleLaunchpad />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
