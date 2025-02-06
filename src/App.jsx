import React from 'react';
import styled from 'styled-components';
import './styles/globals.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background);
  position: relative;
`;

const MainContent = styled.main`
  padding-top: 80px; // Height of the navbar
  width: 100%;
  
  section {
    width: 100%;
    position: relative;
  }
  
  #home {
    min-height: calc(100vh - 80px);
    padding-top: 0;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default App; 