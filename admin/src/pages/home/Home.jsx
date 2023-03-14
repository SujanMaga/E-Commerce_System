import React from "react";
import styled from "styled-components";
import Featuredinfo from "../../components/Featuredinfo";
const Container = styled.div`
  flex: 4;
`;
const Home = () => {
  return (
    <Container>
      <Featuredinfo />
    </Container>
  );
};

export default Home;
