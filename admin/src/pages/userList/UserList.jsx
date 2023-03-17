import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
import { userRows } from "../../testing";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 4;
`;
const UserListUser = styled.div`
  display: flex;
  align-items: center;
`;
const UserListImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const UserListEditButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: gray;
  color: white;
  padding: 5px 10px;
  margin-right: 20px;
  cursor: pointer;
`;
const UserList = () => {
  //for functional delete (user)
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <UserListUser>
            <UserListImage
              src={params.row.avatar}
              alt="userProfile"
            ></UserListImage>
            {params.row.username}
          </UserListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user" + params.row.id}>
              <UserListEditButton>Edit</UserListEditButton>
            </Link>

            <Delete
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {
                handleDelete(params.row.id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};
export default UserList;
