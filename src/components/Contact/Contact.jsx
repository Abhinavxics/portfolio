import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import ScrollAnimation from '../common/ScrollAnimation';
import { staggerContainer } from '../../utils/animations';

const ContactSection = styled.section`
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
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled(motion.form)`
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--glass-border);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px rgba(0, 255, 148, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px rgba(0, 255, 148, 0.1);
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: var(--accent);
  color: var(--background);
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 148, 0.2);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const SuccessMessage = styled(motion.div)`
  margin-top: 1rem;
  padding: 0.8rem;
  background: rgba(0, 255, 148, 0.1);
  border: 1px solid var(--accent);
  border-radius: 0.5rem;
  color: var(--accent);
  text-align: center;
`;

const ErrorMessage = styled(motion.div)`
  margin-top: 1rem;
  padding: 0.8rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff4444;
  border-radius: 0.5rem;
  color: #ff4444;
  text-align: center;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--glass-border);
  
  h3 {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
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
    color: var(--text-secondary);
    font-size: 1rem;
    margin: 0;
  }
`;

const Note = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 1rem;
  text-align: center;
`;

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <ScrollAnimation variant={staggerContainer}>
          <Grid>
            <ContactForm
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <h2>Get In Touch</h2>
              <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
              
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" required />
              </FormGroup>
              
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" required />
              </FormGroup>
              
              <FormGroup>
                <Label>Message</Label>
                <TextArea name="message" rows="6" required />
              </FormGroup>
              
              <Button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
              
              {success && (
                <SuccessMessage>Message sent successfully!</SuccessMessage>
              )}
              {error && (
                <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
              )}
            </ContactForm>

            <ContactInfo>
              <InfoCard>
                <h3>Contact Information</h3>
                <p>I'd love to hear from you! Here's how you can reach me.</p>
                
                <ContactDetails>
                  <DetailItem>
                    <FiMail />
                    <div>
                      <h4>Email</h4>
                      <p>abhinavcodesleep.com@gmail.com</p>
                    </div>
                  </DetailItem>
                  
                  <DetailItem>
                    <FiMapPin />
                    <div>
                      <h4>Location</h4>
                      <p>Lucknow, India</p>
                    </div>
                  </DetailItem>
                </ContactDetails>

                <Note>
                  * I typically respond within 24-48 hours
                </Note>
              </InfoCard>
            </ContactInfo>
          </Grid>
        </ScrollAnimation>
      </Container>
    </ContactSection>
  );
};

export default Contact; 