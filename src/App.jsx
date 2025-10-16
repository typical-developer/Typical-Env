import { Routes,Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import 'boxicons/css/boxicons.min.css'

export default function App({ className }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
