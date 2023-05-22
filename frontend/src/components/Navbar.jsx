import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  margin-left: 25px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  // const cart = useSelector((state) => state.cart);
  // console.log(cart);
  const quantity = useSelector((state) => state.cart.quantity);

  const displayedQuantity = quantity >= 0 ? quantity : 0;
  // console.log(quantity);
  const handleLogOutClick = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Center>
          <Logo onClick={handleClick}>Yukti</Logo>
        </Center>
        <Right>
          {user ? (
            <MenuItem onClick={handleLogOutClick}>LOGOUT</MenuItem>
          ) : (
            <>
              <MenuItem>
                <StyledLink to="/register">REGISTER</StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/login">SIGN IN</StyledLink>
              </MenuItem>
            </>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={displayedQuantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
