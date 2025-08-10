import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { motion } from "framer-motion";
import { Routes, Route } from 'react-router-dom';
import AllFilms from './pages/AllFilms';
import AllPeople from './pages/AllPeople';
import FilmDetail from './pages/FilmDetail';
import PersonDetail from './pages/PersonDetail';

export default function App() {
  return (
    <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<AllFilms />} />
        <Route path="/people" element={<AllPeople />} />
        <Route path="/films/:id" element={<FilmDetail />} />
        <Route path="/films/:id" element={<FilmDetail />} />
        <Route path="/people/:id" element={<PersonDetail />} />
      </Routes>

      <Footer />
    </motion.div>
  );
}
