import React from "react";
import styled from "styled-components";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 70px);
  position: sticky;
  top: 50px;
  background-color: rgb(219, 219, 231);
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #665151;
`;
const SidebarMenu = styled.div`
  margin-bottom: 20px;
`;
const SidebarTitle = styled.h3`
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
    background-color: #ebebeb;
  }
`;
const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <LineStyle style={{ marginRight: "5px" }} />
              Home
            </SidebarListItem>
            <SidebarListItem>
              <Timeline style={{ marginRight: "5px" }} />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp style={{ marginRight: "5px" }} />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
