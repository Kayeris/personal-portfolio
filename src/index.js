import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Blog from "./pages/blog";
// import Navbar from "./components/navbar";
import NoPage from "./pages/error";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Landing />}>
        </Route>
      </Routes>
      {/* <Navbar/> */}
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);