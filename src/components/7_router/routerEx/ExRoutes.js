import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ExHome } from "./components/ExHome";
import { SubPage1 } from "./components/SubPage1";
import { SubPage2 } from "./components/SubPage2";
import { ExHeader } from "./ExHeader";

export const ExRoutes = () => {
  return (
    <Router>
      <ExHeader />
      <Routes>
        <Route path="/" element={<ExHome />} />
        <Route path="/subpage1" element={<SubPage1 />} />
        <Route path="/subpage2" element={<SubPage2 />} />
      </Routes>
    </Router>
  );
};
