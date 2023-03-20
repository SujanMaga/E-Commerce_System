import React from "react";
import styled from "styled-components";
import {
  CalendarToday,
  Email,
  Home,
  LocalPhone,
  Person,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserTitle = styled.h1``;
const UserAddButton = styled.button`
  border: none;
  padding: 5px;
  width: 80px;
  background-color: rgb(17, 155, 220);
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const UserDisplay = styled.div`
  flex: 1;
  padding: 20px;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserDisplayTop = styled.div`
  display: flex;
  align-items: center;
`;
const UserDisplayTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const UserDisplayUsername = styled.span`
  font-weight: 600;
`;
const UserDisplayUserTitle = styled.span`
  font-weight: 300;
`;
const UserDisplayImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserDisplayInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;
const UserDisplayTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: grey;
`;
const UserDisplayInputTitle = styled.span`
  margin-left: 20px;
`;
const UserDisplayButton = styled.div`
  margin-top: 20px;
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  box-shadow: 6px 4px 31px -1px rgba(0, 0, 0, 0.45);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UserUpdateLeft = styled.div``;
const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const UserLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;
const UserUpdateInput = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;

const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

const UserUpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 20px;
  object-fit: cover;
`;

const UserUpdateButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: #1111d3ee;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const User = () => {
  return (
    <Container>
      {/* user info */}
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to="/newUser">
          <UserAddButton>Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      <UserContainer>
        <UserDisplay>
          <UserDisplayTop>
            <UserDisplayImage
              alt=""
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></UserDisplayImage>
            <UserDisplayTopTitle>
              <UserDisplayUsername>Sanil Manandhar</UserDisplayUsername>
              <UserDisplayUserTitle>Developer</UserDisplayUserTitle>
            </UserDisplayTopTitle>
          </UserDisplayTop>
          <UserDisplayButton>
            <UserDisplayTitle>Account Detail</UserDisplayTitle>
            <UserDisplayInfo>
              <Person />
              <UserDisplayInputTitle>sanilmdr33</UserDisplayInputTitle>
            </UserDisplayInfo>
            <UserDisplayInfo>
              <CalendarToday />

              <UserDisplayInputTitle>12-2-2000</UserDisplayInputTitle>
            </UserDisplayInfo>
            <UserDisplayTitle>Contact Detail</UserDisplayTitle>
            <UserDisplayInfo>
              <LocalPhone />
              <UserDisplayInputTitle>92828282</UserDisplayInputTitle>
            </UserDisplayInfo>
            <UserDisplayInfo>
              <Email />
              <UserDisplayInputTitle>
                sanilmdr33@gmail.com
              </UserDisplayInputTitle>
            </UserDisplayInfo>
            <UserDisplayInfo>
              <Home />
              <UserDisplayInputTitle>Kathmandu,Nepal</UserDisplayInputTitle>
            </UserDisplayInfo>
          </UserDisplayButton>
        </UserDisplay>
        {/* userupdate */}
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <UserLabel>Username</UserLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="sanilmdr33"
                ></UserUpdateInput>
              </UserUpdateItem>

              <UserUpdateItem>
                <UserLabel>Full Name</UserLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="sanil manandhar"
                ></UserUpdateInput>
              </UserUpdateItem>

              <UserUpdateItem>
                <UserLabel>Email</UserLabel>
                <UserUpdateInput
                  type="email"
                  placeholder="sanilmdr33@gmail.com"
                ></UserUpdateInput>
              </UserUpdateItem>

              <UserUpdateItem>
                <UserLabel>Phone</UserLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="92828282"
                ></UserUpdateInput>
              </UserUpdateItem>

              <UserUpdateItem>
                <UserLabel>Address</UserLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="Kathmandu,Nepal"
                ></UserUpdateInput>
              </UserUpdateItem>
            </UserUpdateLeft>

            {/* right update */}
            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImg
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </UserUpdateUpload>
              <UserUpdateButton>Update</UserUpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
