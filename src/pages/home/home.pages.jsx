import React from "react";
import styled from "styled-components";
import backgroundImage from '../../assets/port_bg.jpg';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75); /* Adjust the opacity as needed */
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Title = styled(motion.h1)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

const DescriptionContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1em;
  @media (min-width: 768px) {
    max-width:600px;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 30px;
  color: white;
`;
const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 90%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(NavLink)`
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: ${props => props.color || "#007bff"};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration:none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.hoverColor || "#0056b3"};
  }

  &.active {
    background-color: ${props => props.activeColor || "#0056b3"};
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Home = () => {
  return (
    <Container>
      <Overlay />
      <ContentWrapper>
      <Title
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I am Bishal Banstola
        </Title>
        <DescriptionContainer>
        <Description
          initial={{ opacity: 0, y: 1050 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
              I am a versatile web developer specializing in React with a strong background in backend development, artificial intelligence, and graphics/video creation. Committed to pushing the boundaries of web development, I bring creativity and technical expertise to every project.
          </Description>
        </DescriptionContainer>
        <ButtonContainer initial={{ opacity: 0, y: 2050 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5}}>
        <Button
            color="#17a2b8"
            hoverColor="#138496"
            activeColor="#0056b3"
            exact
            to="/about"
          >
            About Me
          </Button>
          <Button
            color="#28a745"
            hoverColor="#218838"
            activeColor="#0056b3"
            to="/contact"
          >
            Contact
          </Button>
          <Button
            color="#ff7675"
            hoverColor="#d39e00"
            activeColor="#0056b3"
            to="/projects"
          >
            View Projects
            </Button>
         </ButtonContainer>
      </ContentWrapper>
    </Container>
  );
};