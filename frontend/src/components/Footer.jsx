import {
  Facebook,
  Instagram,
  LocationCity,
  Mail,
  Phone,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #b7dce7;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;
// const Center = styled.div`
//   flex: 1;
// `;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;
const ContactLogo = styled.div`
  margin-right: 20px;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Yukti</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          nemo ipsa, vitae eligendi corporis autem aspernatur ratione ex facere
          nulla porro sunt in ad blanditiis debitis corrupti dignissimos vero
          quibusdam officiis? Qui pariatur aliquam eius vel accusamus sint
          magnam eum, quasi beatae nam labore molestias, voluptates
          reprehenderit iusto fuga voluptas nobis reiciendis dignissimos aperiam
          et. Amet maiores possimus molestias deleniti, ipsam esse harum
          reprehenderit aspernatur perferendis corporis quisquam sed facilis in
          quam itaque illo porro enim necessitatibus. Consequuntur commodi error
          tempora incidunt numquam iste illum et quisquam ratione, sint
          laboriosam, saepe, atque earum delectus explicabo sed totam unde
          rerum. Excepturi!
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      {/* <Center></Center> */}
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <ContactLogo>
            <LocationCity />
          </ContactLogo>
          Thamel, Kathmandu, Nepal
        </ContactItem>

        <ContactItem>
          <ContactLogo>
            <Phone />
          </ContactLogo>
          +977 98121212188
        </ContactItem>
        <ContactItem>
          <ContactLogo>
            <Mail />
          </ContactLogo>
          yukti@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
