import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Boys from "./pages/Boys";
import Girls from "./pages/Girls";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/boys" element={<Boys />} />
          <Route path="/girls" element={<Girls />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
