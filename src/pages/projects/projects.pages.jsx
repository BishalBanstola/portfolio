import React from "react";
import styled from "styled-components";
import {motion} from 'framer-motion';
const projects = [
    {
      id: 1,
      name: "Weather Recommendation",
      description: "A website that recommends movies to users based on the current weather. The technology used includes Node.js, Firebase, MongoDB, and Bootstrap.",
      imageUrl: "src/assets/apiproject1.png",
      externalLink:'https://github.com/BishalBanstola/web-design-project-api/upload'
    },
    {
      id: 2,
      name: "Calorie Tracker",
      description: "A web app enabling users to set calorie goals and track their intake. Implemented with HTML, CSS, and JavaScript.",
      imageUrl: "src/assets/calorie-tracker.png",
      externalLink:'https://github.com/BishalBanstola/calorie-tracker'
    },
    {
      id: 3,
      name: "Flashcards App",
      description: "A web app for language learning through flashcards, built with React, Redux, and Firebase.",
      imageUrl: "src/assets/flashcards.png",
      externalLink:'https://github.com/BishalBanstola/flashcard',
    },
    {
      id: 4,
      name: "Toxicity",
      description: "A web app allowing users to assess text toxicity. Developed using React and TensorFlow.",
      imageUrl: "src/assets/toxicity.png",
      externalLink:'https://github.com/BishalBanstola/toxicity/upload'
    },
    {
      id: 5,
      name: "TopNews",
      description: "A web app where users can subscribe to various news categories. Developed using HTML, CSS, and JavaScript.",
      imageUrl: "src/assets/topnews.png",
      externalLink:'https://bishalbanstola.github.io/web-application-programming-project1/'
    },
    {
      id: 6,
      name: "Foodmandu",
      description: "An online food ordering website serving Pokhara and Kathmandu in Nepal. Implemented with React, Node.js, SQL, and Java.",
      imageUrl: "src/assets/foodmandu.png",
      externalLink:'https://wwww.foodmandu.com'
    },
    {
      id: 7,
      name: "NepMeds",
      description: "An online pharmacy store based in Nepal. Implemented with technologies such as Java, Spring Boot, and MySQL.",
      imageUrl: "src/assets/pharmacy.png",
      externalLink:'https://www.nepmeds.com.np'
    },
  ];
  

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 300px;
`;
const TitleWrapper = styled.div`
  text-align: center;
  width: 100%;
`;
const Title = styled(motion.h1)`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Image = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 20px;
`;


const Description = styled.p`
  font-size: 1.2rem;
`;
const HorizontalLine = styled.hr`
  width: 20%;
  border-top: 3px solid #ccc;
  margin: 1px auto;
`;

export const ProjectPage = () => {
  return (
    <Container>
        <TitleWrapper>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </Title>
      </TitleWrapper>
      {projects.map((project) => (
        <Card key={project.id}>
          <Image src={project.imageUrl} alt={project.name} />
          <HorizontalLine />
          <Content>
            <Title><a href={project.externalLink} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>{project.name}</a></Title>
            <Description>{project.description}</Description>
          </Content>
        </Card>
      ))}
    </Container>
  );
};
