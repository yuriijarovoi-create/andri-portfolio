import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="app">
      <div className="app__bg" aria-hidden="true">
        <div className="app__gradient-mesh" />
        <div className="app__orb app__orb--1" />
        <div className="app__orb app__orb--2" />
        <div className="app__orb app__orb--3" />
        <div className="app__grid-noise" />
      </div>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
