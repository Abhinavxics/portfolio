import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import * as THREE from 'three';
import { fadeIn, staggerContainer, scaleIn } from '../../utils/animations';
import ScrollAnimation from '../common/ScrollAnimation';

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 6rem 2rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
    min-height: calc(100vh - 80px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const GlassContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  padding: 2.5rem;
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid var(--glass-border);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.2;
  
  span {
    display: block;
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      height: 3px;
      background: var(--accent);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const Subtitle = styled(motion.div)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--accent);
  
  span {
    display: inline-block;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--accent);
      opacity: 0.1;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    &:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const Description = styled(motion.p)`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1rem 0 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 0;
    width: 3px;
    height: 100%;
    background: var(--accent);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleY(1);
  }
  
  @media (max-width: 968px) {
    margin: 1rem auto 2rem;
    max-width: 600px;
  }
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const CTAButton = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: transform 0.5s ease;
    z-index: -1;
  }
  
  &:hover::before {
    transform: translateX(200%);
  }
  
  &.primary {
    background: var(--accent);
    color: var(--background);
    border: 2px solid var(--accent);
    
    &:hover {
      box-shadow: 0 0 20px var(--accent);
    }
  }
  
  &.secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--glass-border);
    
    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  }
  
  span {
    transition: transform 0.3s ease;
  }
  
  &:hover span {
    transform: translateX(5px);
  }
`;

const AvatarContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const BlobSVG = styled.svg`
  width: 100%;
  height: auto;
  max-width: 500px;
  filter: drop-shadow(0 0 20px var(--accent));
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  
  path {
    transition: all 0.8s ease-in-out;
    
    &:hover {
      d: path("M432.8,331.8Q441.6,413.6,363.9,442Q286.2,470.4,217.7,445.6Q149.2,420.8,98.6,371.4Q48,322,42.7,251Q37.4,180,89,127.4Q140.6,74.8,209.8,42.4Q279,10,337.8,54.7Q396.6,99.4,410.9,174.7Q425.2,250,432.8,331.8Z");
    }
  }
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

const Hero = () => {
  const backgroundRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    if (!backgroundRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    backgroundRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#00ff94',
      transparent: true,
      opacity: 0.5,
    });

    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.x += mouseY * 0.01;
      particlesMesh.rotation.y += mouseX * 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Store ref in a variable inside effect
    const currentRef = backgroundRef.current;

    // Use the stored ref in cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    containerRef.current.style.setProperty('--mouse-x', `${x}%`);
    containerRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <HeroSection id="home">
      <Background ref={backgroundRef} />
      <Container>
        <ScrollAnimation variant={staggerContainer}>
          <GlassContainer
            ref={containerRef}
            onMouseMove={handleMouseMove}
            style={{ y, opacity }}
          >
            <ContentLeft>
              <ScrollAnimation variant={fadeIn('up', 0.3)}>
                <Title>
                  <span>Hi, I'm</span>
                  <span>Abhinav Chaurasia</span>
                </Title>
              </ScrollAnimation>
              
              <ScrollAnimation variant={fadeIn('up', 0.5)}>
                <Subtitle>
                  <TypeAnimation
                    sequence={[
                      'Full-Stack Developer',
                      2000,
                      'Web Developer',
                      2000,
                      'Tech Enthusiast',
                      2000,
                      'Student Developer',
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                  />
                </Subtitle>
              </ScrollAnimation>
              
              <ScrollAnimation variant={fadeIn('up', 0.7)}>
                <Description>
                  A 17-year-old passionate developer from Lucknow, crafting innovative digital experiences 
                  with cutting-edge technology. Transforming ideas into reality through clean code and 
                  creative solutions. Young, driven, and always eager to learn new technologies.
                </Description>
              </ScrollAnimation>
              
              <ScrollAnimation variant={fadeIn('up', 0.9)}>
                <CTAContainer>
                  <CTAButton 
                    href="#projects" 
                    className="primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                    <span>→</span>
                  </CTAButton>
                  <CTAButton 
                    href="#contact" 
                    className="secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                    <span>✉</span>
                  </CTAButton>
                </CTAContainer>
              </ScrollAnimation>
            </ContentLeft>
            
            <ScrollAnimation variant={scaleIn(0.5)}>
              <AvatarContainer whileHover={{ scale: 1.05 }}>
                <BlobSVG viewBox="0 0 500 500">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'var(--primary)' }} />
                      <stop offset="100%" style={{ stopColor: 'var(--accent)' }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M420.5,323.2Q432,396.4,362.9,422.7Q293.8,449,228.4,438.1Q163,427.2,101.9,386.9Q40.8,346.6,44.4,273.3Q48,200,89.4,143.8Q130.8,87.6,196.9,67.3Q263,47,322,82.8Q381,118.6,406.2,184.3Q431.4,250,420.5,323.2Z"
                    fill="url(#gradient)"
                  />
                </BlobSVG>
              </AvatarContainer>
            </ScrollAnimation>
          </GlassContainer>
        </ScrollAnimation>
      </Container>
    </HeroSection>
  );
};

export default Hero; 