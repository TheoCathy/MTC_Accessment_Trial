import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./Contents/AboutUs";
import Shop from "./Contents/Shop";
import Cart from "./Contents/Cart";
import PlanMyKit from "./Contents/PlanMyKit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/plan_kitchen" element={<PlanMyKit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
