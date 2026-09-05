import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Emaus from "../pages/Emaus/Emaus";
import Kadosh from "../pages/Kadosh/Kadosh";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Emaus />} />
        <Route path="/emaus" element={<Emaus />} />
        <Route path="/Emaus" element={<Emaus />} />

        <Route path="/kadosh" element={<Kadosh />} />
        <Route path="/Kadosh" element={<Kadosh />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;