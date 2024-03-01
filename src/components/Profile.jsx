import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: black;
  color: white;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Name = styled.h1`
  font-size: 24px;
  margin-bottom: 0px;
`;

const SubName = styled.h1`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Age = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const Location = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
  margin: 0px 40px 20px 40px;
`;

const WorkplaceTitle = styled.h2`
  font-size: 20px;
  margin: 20px 0 0px 0;
`;

const WorkplaceDescription = styled.p`
  font-size: 16px;
  text-align: center;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const LinkTitle = styled.h2`
  font-size: 20px;
`;

const Link = styled.a`
  font-size: 16px;
  color: white;
  text-decoration: underline;

  &:hover {
    color: lightblue;
  }
`;

const Profile = () => {
  return (
    <Container>
      <ProfileImage src="src/images/my_photo.jpg" alt="my_photo.jpg" />
      <Name>Bruno Vieira Souza</Name>
      <Age>Idade: 30</Age>
      <Location>Onde moro: São Paulo - SP, Brasil</Location>
      <WorkplaceTitle>Local de Trabalho</WorkplaceTitle>
      <WorkplaceDescription>Accenture - Desenvolvedor iOS</WorkplaceDescription>
      <SubName>Descrição</SubName>
      <Description>Desenvolvedor de Software iOS e atualmente cursando MBA em Mobile Development Sou um desenvolvedor de software iOS com experiência profissional em grandes consultorias, especialmente no setor bancário. Atualmente, estou cursando MBA em Desenvolvimento Mobile para aprimorar ainda mais minhas habilidades e conhecimentos em minha área de especialização. Minha carreira se destaca pela colaboração em projetos desafiadores para grandes bancos, inclusive fora do Brasil. Além disso, tenho a oportunidade de aplicar minha experiência trabalhando na maior empresa de consultoria do mundo.</Description>

      {/* Adicionando os links */}
      <LinkContainer>
        <LinkTitle>LinkedIn:</LinkTitle>
        <Link href="https://www.linkedin.com/in/bruno-vieira-a1264b16b/" target="_blank" rel="noopener noreferrer">Clique aqui para visitar meu LinkedIn</Link>
      </LinkContainer>

      <LinkContainer>
        <LinkTitle>GitHub:</LinkTitle>
        <Link href="https://github.com/BrunoVieiraSouza" target="_blank" rel="noopener noreferrer">Clique aqui para visitar meu GitHub</Link>
      </LinkContainer>
    </Container>
  );
};

export default Profile;
