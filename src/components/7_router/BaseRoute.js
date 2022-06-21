import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./routes/Home";
import { Intro } from "./routes/Intro";
import { PageNotFound } from "./routes/PageNotFound";
import { Product } from "./routes/Product";

export const BaseRoute = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/product" element={<Product />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
