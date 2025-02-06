import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ 
  children, 
  variant, 
  className = '', 
  threshold = 0.1,
  ...props 
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 