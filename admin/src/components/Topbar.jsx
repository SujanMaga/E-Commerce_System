import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Topbar = () => {
  return (
    <Container>
      <TopbarWrapper>
        <TopLeft>
          <Logo>Admin</Logo>
        </TopLeft>
        <TopRight>
          <TopAvatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </TopRight>
      </TopbarWrapper>
    </Container>
  );
};

export default Topbar;
