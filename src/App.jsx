import FilmList from './components/FilmList';
import PeopleList from './components/PeopleList';
import Header from './components/Header';
import Footer from './components/Footer';
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} whileFocus={{ scale: 1.05 }}>
      <Header />

      <section id="films">
        <FilmList limit={6} />
      </section>
      
      <section id="people">
        <PeopleList limit={6} />
      </section>

      <Footer />
    </motion.div>
  );
}
