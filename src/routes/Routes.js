import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import { MyContext } from "../context/MyContext";

const RouteConfig = () => {
  return (
    <Router>
      <MyContext>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext>
    </Router>
  );
};

export default RouteConfig;
