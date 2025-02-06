import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiLayout, FiTool, FiGitBranch, FiCpu, FiCloud } from 'react-icons/fi';

const SkillsSection = styled.section`
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const SkillCard = styled(motion.div)`
  position: relative;
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid var(--glass-border);
  padding: 2rem;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border-color: var(--accent);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  svg {
    font-size: 2.5rem;
    color: var(--accent);
    filter: drop-shadow(0 0 10px var(--accent));
  }
  
  h3 {
    font-size: 1.8rem;
    color: var(--text-primary);
    background: linear-gradient(135deg, var(--text-primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SkillList = styled.div`
  display: grid;
  gap: 1.2rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1.1rem;
`;

const SkillLevel = styled.span`
  color: var(--accent);
  font-size: 0.9rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    width: ${props => props.level}%;
    height: 100%;
    background: var(--accent);
    border-radius: 3px;
    transition: width 1s ease-in-out;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ExperienceCard = styled(motion.div)`
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  
  svg {
    font-size: 2rem;
    color: var(--accent);
    margin-bottom: 1rem;
  }
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }
  
  p {
    color: var(--text-secondary);
  }
`;

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FiLayout />,
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Three.js', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FiServer />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      title: 'Database',
      icon: <FiDatabase />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Redis', level: 75 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <FiTool />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 85 }
      ]
    }
  ];

  const experienceStats = [
    { icon: <FiCode />, count: '500K+', label: 'Lines of Code' },
    { icon: <FiCpu />, count: '100+', label: 'Optimizations' },
    { icon: <FiCloud />, count: '50+', label: 'Deployments' },
    { icon: <FiGitBranch />, count: '1000+', label: 'Git Commits' }
  ];

  return (
    <SkillsSection id="skills">
      <Container
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Header>
          <h2>Skills & Expertise</h2>
          <p>
            Mastering modern technologies to create exceptional digital experiences.
            From frontend finesse to backend robustness, I bring ideas to life.
          </p>
        </Header>

        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <CardHeader>
                {category.icon}
                <h3>{category.title}</h3>
              </CardHeader>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                  >
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillLevel>{skill.level}%</SkillLevel>
                    </SkillHeader>
                    <ProgressBar level={skill.level} />
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>

        <ExperienceGrid>
          {experienceStats.map((stat, index) => (
            <ExperienceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              {stat.icon}
              <h4>{stat.count}</h4>
              <p>{stat.label}</p>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 