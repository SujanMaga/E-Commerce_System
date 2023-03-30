import React from "react";
import styled from "styled-components";
import Featuredinfo from "../../components/Featuredinfo";
import WidgetL from "../../components/WidgetL";
import WidgetS from "../../components/WidgetS";
const Container = styled.div`
  flex: 4;
`;
const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;
const Home = () => {
  return (
    <Container>
      <Featuredinfo />
      <HomeWidgets>
        <WidgetS />
        <WidgetL />
      </HomeWidgets>
    </Container>
  );
};

export default Home;
