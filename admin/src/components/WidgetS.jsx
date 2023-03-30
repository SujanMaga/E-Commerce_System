import React from "react";
import styled from "styled-components";
import { Visibility } from "@material-ui/icons";
const Container = styled.div`
  flex: 1;
  flex: 1;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;
const WidgetSmTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const WidgetSmImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const WidgetSmUsername = styled.span`
  font-weight: 600;
`;

const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`;

const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

const WidgetSmIcon = styled(Visibility)`
  font-size: 16px !important;
  margin-right: 5px;
`;
const WidgetS = () => {
  return (
    <Container>
      <WidgetSmTitle>Newest member</WidgetSmTitle>
      <WidgetSmList>
        <WidgetSmListItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <WidgetSmUser>
            <WidgetSmUsername>Sanil KC</WidgetSmUsername>
            <WidgetSmUserTitle>Business Analyst</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <WidgetSmIcon />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>
        <WidgetSmListItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <WidgetSmUser>
            <WidgetSmUsername>Anil Thapa</WidgetSmUsername>
            <WidgetSmUserTitle>MERN Developer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <WidgetSmIcon />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>
      </WidgetSmList>
    </Container>
  );
};
export default WidgetS;
