import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import PortfolioPage from './pages/Portfolio';
import Contact from './pages/Contact';

const pageTitles = {
  '/': 'Startseite',
  '/ueber-mich': 'Über Mich',
  '/lebenslauf': 'Lebenslauf',
  '/portfolio': 'Portfolio',
  '/kontakt': 'Kontakt',
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const title = pageTitles[pathname] || 'Portfolio';
    document.title = `${title} | Andrii Yarovyi`;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PageTransition />}>
            <Route index element={<Home />} />
            <Route path="ueber-mich" element={<About />} />
            <Route path="lebenslauf" element={<CV />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="kontakt" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
