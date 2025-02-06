import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const ProjectsSection = styled.section`
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

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
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
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ProjectCard = styled(motion.div)`
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    border-color: var(--accent);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  svg {
    font-size: 2.5rem;
    color: var(--accent);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: var(--text-secondary);
    font-size: 1.2rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent);
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 1rem 0;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  padding: 0.4rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  color: var(--accent);
`;

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and multi-language support.",
      tech: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with 3D animations and interactive elements.",
      tech: ["React", "Three.js", "Framer Motion", "Styled Components"],
      github: "https://github.com/yourusername/project3",
      live: "https://project3.com"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management system with real-time updates and analytics.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/yourusername/project4",
      live: "https://project4.com"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and historical data.",
      tech: ["React", "Redux", "Weather API", "D3.js"],
      github: "https://github.com/yourusername/project5",
      live: "https://project5.com"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization.",
      tech: ["Angular", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/yourusername/project6",
      live: "https://project6.com"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Header>
          <h2>Featured Projects</h2>
          <p>
            A collection of projects that showcase my skills and passion for building
            innovative digital solutions.
          </p>
        </Header>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectHeader>
                <FiFolder />
                <ProjectLinks>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink />
                  </a>
                </ProjectLinks>
              </ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 