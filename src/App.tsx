import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import NewsSingle from "./pages/news-single/NewsSingle";
import Services from "./pages/services/Services";
import Books from "./pages/books/Books";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import About from "./pages/about/About";
import SingleBook from "./pages/single-book/SingleBook";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsSingle />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
