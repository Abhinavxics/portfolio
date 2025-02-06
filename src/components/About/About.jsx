import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiAward, FiCode, FiUsers } from 'react-icons/fi';
import YourImage from '../../assets/your-photo.jpg'; // Add your photo to this path

const AboutSection = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  padding: 6rem 2rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  
  &::before, &::after {
    content: '';
    position: absolute;
    border: 2px solid var(--accent);
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transition: transform 0.3s ease;
  }
  
  &::before {
    top: 20px;
    left: 20px;
    z-index: -1;
  }
  
  &::after {
    bottom: 20px;
    right: 20px;
    z-index: -1;
  }
  
  &:hover::before {
    transform: translate(-10px, -10px);
  }
  
  &:hover::after {
    transform: translate(10px, 10px);
  }
`;

const ProfileImage = styled(motion.div)`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 2;
  
  svg {
    font-size: 1.5rem;
    color: var(--accent);
  }
  
  h4 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 0.2rem;
  }
  
  p {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  
  &.experience {
    top: -20px;
    right: -20px;
  }
  
  &.projects {
    bottom: 40px;
    left: -20px;
  }
  
  &.clients {
    top: 40%;
    right: -40px;
  }
`;

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--text-primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const BioText = styled.div`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  p + p {
    margin-top: 1rem;
  }
  
  strong {
    color: var(--accent);
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

const Tag = styled(motion.span)`
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  color: var(--text-primary);
  
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled(motion.a)`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &.primary {
    background: var(--accent);
    color: var(--background);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 255, 148, 0.2);
    }
  }
  
  &.secondary {
    background: var(--glass-background);
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
    
    &:hover {
      transform: translateY(-3px);
      border-color: var(--accent);
      color: var(--accent);
    }
  }
`;

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  const skills = [
    'React', 'Node.js', 'TypeScript', 'Next.js', 'GraphQL', 
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'
  ];

  return (
    <AboutSection id="about">
      <Container
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Grid>
          <ImageContainer>
            <ProfileImage
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <img src={YourImage} alt="Abhinav Chaurasia" />
            </ProfileImage>
            
            <FloatingCard
              className="experience"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FiAward />
              <div>
                <h4>Young Developer</h4>
                <p>17 Years Old</p>
              </div>
            </FloatingCard>
            
            <FloatingCard
              className="projects"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <FiCode />
              <div>
                <h4>10+ Projects</h4>
                <p>Completed</p>
              </div>
            </FloatingCard>
            
            <FloatingCard
              className="clients"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FiUsers />
              <div>
                <h4>From Lucknow</h4>
                <p>Uttar Pradesh</p>
              </div>
            </FloatingCard>
          </ImageContainer>

          <Content>
            <h2>About Me</h2>
            <BioText>
              <p>
                I'm a <strong>17-year-old passionate developer</strong> from Lucknow, with a keen eye for design 
                and a drive for innovation. My journey in tech started with curiosity and has evolved into 
                creating impactful applications that make a difference.
              </p>
              <p>
                As a <strong>young and ambitious developer</strong>, I combine fresh perspectives with 
                modern technologies to build creative solutions. Whether it's crafting smooth user experiences 
                or solving complex problems, I'm always excited to learn and grow.
              </p>
            </BioText>

            <SkillTags>
              {skills.map((skill, index) => (
                <Tag
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </Tag>
              ))}
            </SkillTags>

            <CTAButtons>
              <Button
                href="/resume.pdf"
                className="primary"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download Resume
              </Button>
              <Button
                href="https://github.com/yourusername"
                className="secondary"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub />
                View GitHub
              </Button>
              <Button
                href="https://linkedin.com/in/yourusername"
                className="secondary"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin />
                Connect
              </Button>
            </CTAButtons>
          </Content>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 