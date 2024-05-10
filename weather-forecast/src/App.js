import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Display } from "./Components/Display";
import { Rain } from "./Components/Rain";
import { Weather } from "./Components/Weather";
import { RainTomorrow } from "./Components/RainTomorrow";
import { NoRainTomorrow } from "./Components/NoRainTomorrow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/rain" element={<Rain />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/rainTomorrow" element={<RainTomorrow />} />
        <Route path="/noRainTomorrow" element={<NoRainTomorrow />} />
      </Routes>
    </Router>
  );
}

export default App;
