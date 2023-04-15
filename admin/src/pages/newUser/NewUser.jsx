import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  margin-left: 15px;
`;

const NewUserTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #555;
`;

const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const NewUserFormItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const NewUserFormItemLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;

const NewUserFormItemInput = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const NewUserButton = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

export default function NewUser() {
  return (
    <Container>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserFormItem>
          <NewUserFormItemLabel>Username</NewUserFormItemLabel>
          <NewUserFormItemInput type="text" placeholder="Sanil" />
        </NewUserFormItem>
        <NewUserFormItem>
          <NewUserFormItemLabel>Email</NewUserFormItemLabel>
          <NewUserFormItemInput type="email" placeholder="Sanil@gmail.com" />
        </NewUserFormItem>
        <NewUserFormItem>
          <NewUserFormItemLabel>Password</NewUserFormItemLabel>
          <NewUserFormItemInput type="password" placeholder="password" />
        </NewUserFormItem>
        <NewUserFormItem>
          <NewUserFormItemLabel>Phone</NewUserFormItemLabel>
          <NewUserFormItemInput type="text" placeholder="983282828" />
        </NewUserFormItem>
        <NewUserFormItem>
          <NewUserFormItemLabel>Address</NewUserFormItemLabel>
          <NewUserFormItemInput type="text" placeholder="Kathmandu, Nepal" />
        </NewUserFormItem>

        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </Container>
  );
}
