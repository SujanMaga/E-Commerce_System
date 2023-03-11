import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
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
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const TopbarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

const TopIconBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
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
          <TopbarIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Settings />
          </TopbarIconContainer>
          <TopAvatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </TopRight>
      </TopbarWrapper>
    </Container>
  );
};

export default Topbar;
