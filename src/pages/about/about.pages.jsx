import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  padding: 20px;
  text-align: left;
  @media (max-width: 769px) {
    max-width: 500px; /* Hidden on desktop */
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin: 10px 0;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  margin-top:0;
  font-weight: 400;
  line-height:1.5;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom:30px;
`;

const SkillItem = styled.li`
  font-size: 1.1rem;
  margin:0;
`;

export const About = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hey there, I am Bishal!
        </Title>
        <Paragraph
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I specialize in frontend and full-stack web development, with a focus
          on JavaScript, React, Node.js, and mobile development using React
          Native. Additionally, I have experience in databases such as SQL,
          Firebase, and MongoDB, along with expertise in machine learning and
          data analytics.
        </Paragraph>
        <Title
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
         SKILLS
        </Title>
        <SkillsList>
          <SkillItem
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            JavaScript, React, Node.js, SQL, Firebase, MongoDB, React Native,
            machine learning, data analytics
          </SkillItem>
        </SkillsList>
        <Title
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          BACKGROUND
        </Title>
        <Paragraph
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Having transitioned from a full-stack web developer role to a frontend
          position with a focus on React, I bring a wealth of experience in
          both backend and frontend development. Currently, I'm enhancing my
          skills further through a web design and development program at Humber
          College, solidifying my expertise in creating exceptional digital
          experiences.
        </Paragraph>
      </ContentWrapper>
    </Container>
  );
};

