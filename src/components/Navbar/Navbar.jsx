import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
  transition: all var(--transition-normal);
  padding: 0 2rem;
  
  ${props => props.scrolled && `
    height: 70px;
    background: rgba(10, 10, 31, 0.95);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  `}
`;

const NavContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Logo = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  
  .logo-icon {
    color: var(--accent);
    font-size: 1.8rem;
  }
  
  span {
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover, &.active {
    color: var(--accent);
    background: rgba(0, 255, 148, 0.1);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: var(--glass-background);
  backdrop-filter: blur(20px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
`;

const MobileNavLink = styled(motion.div)`
  a {
    display: block;
    color: var(--text-secondary);
    text-decoration: none;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover, &.active {
      color: var(--accent);
      background: rgba(0, 255, 148, 0.1);
    }
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: var(--accent);
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: 'home', label: 'Home', offset: -80 },
    { to: 'about', label: 'About', offset: -80 },
    { to: 'skills', label: 'Skills', offset: -80 },
    { to: 'projects', label: 'Projects', offset: -80 },
    { to: 'contact', label: 'Contact', offset: -80 }
  ];

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiCode className="logo-icon" />
          <span>Abhinav</span>
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
              className={activeSection === item.to ? 'active' : ''}
              onClick={() => setActiveSection(item.to)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton
          onClick={() => setMobileMenuOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiMenu />
        </MobileMenuButton>
      </NavContainer>

      <ProgressBar
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {mobileMenuOpen && (
        <>
          <MobileOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <MobileMenuButton
              onClick={() => setMobileMenuOpen(false)}
              style={{ alignSelf: 'flex-end' }}
            >
              <FiX />
            </MobileMenuButton>
            
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.to}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  onClick={() => {
                    setActiveSection(item.to);
                    setMobileMenuOpen(false);
                  }}
                  className={activeSection === item.to ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </MobileNavLink>
            ))}
          </MobileMenu>
        </>
      )}
    </Nav>
  );
};

export default Navbar; 