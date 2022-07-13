import './styles.css';
import { useEffect } from 'react'
import About from './components/About';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
    </div>
  );
}