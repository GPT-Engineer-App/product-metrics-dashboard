import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Retention from "./pages/Retention";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/retention" element={<Retention />} />
      </Routes>
    </Router>
  );
}

export default App;
