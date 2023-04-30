import React from "react";
import styled from "styled-components";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  NotesOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Container = styled.div`
  flex: 1;
  /* height: 100vh; */
  position: sticky;
  top: 50px;
  /* background-color: rgb(219, 219, 231); */
  background-color: rgb(189, 228, 246);
  height: 100%;
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #665151;
`;
const SidebarMenu = styled.div`
  margin-bottom: 20px;
`;
const SidebarTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
`;
const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const SidebarListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #47c2f3;
  }
`;
const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <StyledLink to="/">
              <SidebarListItem>
                <LineStyle style={{ marginRight: "5px" }} />
                Home
              </SidebarListItem>
            </StyledLink>
            <SidebarListItem>
              <Timeline style={{ marginRight: "5px" }} />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp style={{ marginRight: "5px" }} />
              Sales
            </SidebarListItem>
          </SidebarList>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
            <StyledLink to="/users">
              <SidebarListItem>
                <PermIdentity style={{ marginRight: "5px" }} />
                Users
              </SidebarListItem>
            </StyledLink>
            <StyledLink to="/products">
              <SidebarListItem>
                <Storefront style={{ marginRight: "5px" }} />
                Products
              </SidebarListItem>
            </StyledLink>

            <StyledLink to="/orders">
              <SidebarListItem>
                <NotesOutlined style={{ marginRight: "5px" }} />
                Orders
              </SidebarListItem>
            </StyledLink>

            <SidebarListItem>
              <BarChart style={{ marginRight: "5px" }} />
              Reports
            </SidebarListItem>
          </SidebarList>

          <SidebarTitle>Notification</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MailOutline style={{ marginRight: "5px" }} />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <DynamicFeed style={{ marginRight: "5px" }} />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <ChatBubbleOutline style={{ marginRight: "5px" }} />
              Messages
            </SidebarListItem>
          </SidebarList>
          <SidebarTitle>Staff</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <WorkOutline style={{ marginRight: "5px" }} />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <Timeline style={{ marginRight: "5px" }} />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Report style={{ marginRight: "5px" }} />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
