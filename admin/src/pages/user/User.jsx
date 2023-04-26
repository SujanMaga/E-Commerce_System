import React from "react";
import styled from "styled-components";
import { Email, Home, LocalPhone, Person, Publish } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import { updateUser } from "../../redux/apiCalls";

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
  // const dispatch = useDispatch();
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const user = useSelector((state) =>
    state.adminUser.users.find((user) => user._id === userId)
  );
  const handleEdit = (id, user) => {
    // updateUser(id, product, dispatch);
  };
  // console.log(product);
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
            <UserDisplayImage alt="" src={user.img}></UserDisplayImage>
            <UserDisplayTopTitle>
              <UserDisplayUsername>{user.username}</UserDisplayUsername>
            </UserDisplayTopTitle>
          </UserDisplayTop>
          <UserDisplayButton>
            <UserDisplayTitle>Account Detail</UserDisplayTitle>
            <UserDisplayInfo>
              <Person />
              <UserDisplayInputTitle>{user.username}</UserDisplayInputTitle>
            </UserDisplayInfo>

            <UserDisplayTitle>Contact Detail</UserDisplayTitle>
            <UserDisplayInfo>
              <LocalPhone />
              <UserDisplayInputTitle>{user.phone}</UserDisplayInputTitle>
            </UserDisplayInfo>
            <UserDisplayInfo>
              <Email />
              <UserDisplayInputTitle>{user.email}</UserDisplayInputTitle>
            </UserDisplayInfo>
            <UserDisplayInfo>
              <Home />
              <UserDisplayInputTitle>{user.address}</UserDisplayInputTitle>
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
                  placeholder={user.username}
                ></UserUpdateInput>
              </UserUpdateItem>

              <UserUpdateItem>
                <UserLabel>Email</UserLabel>
                <UserUpdateInput
                  type="email"
                  placeholder={user.email}
                ></UserUpdateInput>
              </UserUpdateItem>

              <UserUpdateItem>
                <UserLabel>Phone</UserLabel>
                <UserUpdateInput
                  type="text"
                  placeholder={user.phone}
                ></UserUpdateInput>
              </UserUpdateItem>

              <UserUpdateItem>
                <UserLabel>Address</UserLabel>
                <UserUpdateInput
                  type="text"
                  placeholder={user.address}
                ></UserUpdateInput>
              </UserUpdateItem>
            </UserUpdateLeft>

            {/* right update */}
            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImg
                  className="userUpdateImg"
                  src={user.img}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </UserUpdateUpload>
              <UserUpdateButton
                onClick={() => {
                  handleEdit(user._id, user);
                }}
              >
                Update
              </UserUpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
