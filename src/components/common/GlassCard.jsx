import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  padding: 2rem;
  border-radius: 1rem;
  transition: all var(--transition-normal);
  
  &.glass {
    background: var(--glass-background);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 148, 0.2);
  }
`;

const GlassCard = ({ children, className, ...props }) => {
  return (
    <Card className={`glass ${className}`} {...props}>
      {children}
    </Card>
  );
};

export default GlassCard; 