import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const FooterSection = styled.footer`
  width: 100%;
  position: relative;
  padding: 4rem 2rem 2rem;
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--glass-border);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const BrandSection = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const LinksSection = styled.div`
  h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const NavLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: var(--accent);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--glass-border);
  margin: 2rem 0;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: var(--accent);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent);
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <FooterSection>
      <Container>
        <Grid>
          <BrandSection>
            <h2>Abhinav Chaurasia</h2>
            <p>
              A young developer passionate about creating innovative digital solutions.
              Let's build something amazing together.
            </p>
          </BrandSection>

          <LinksSection>
            <h3>Quick Links</h3>
            <NavLinks>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {item.label}
                </NavLink>
              ))}
            </NavLinks>
          </LinksSection>

          <LinksSection>
            <h3>Connect</h3>
            <SocialLinks>
              <SocialIcon
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FiGithub />
              </SocialIcon>
              <SocialIcon
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <FiLinkedin />
              </SocialIcon>
              <SocialIcon
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FiTwitter />
              </SocialIcon>
            </SocialLinks>
          </LinksSection>
        </Grid>

        <Divider />

        <BottomBar>
          <Copyright>
            © {currentYear} Made with <FiHeart /> by Abhinav Chaurasia
          </Copyright>
          <FooterLinks>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </FooterLinks>
        </BottomBar>
      </Container>
    </FooterSection>
  );
};

export default Footer; 