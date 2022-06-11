import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderImage src={logo} alt="logo" onClick={navigate("/Main")} />
      <HeaderWrapper>
        <Btn>Log In</Btn>
        <Btn>Sign Up</Btn>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderImage = styled.image`
  object-fit: contain;
  height: 1000px;
  margin-left: 20px;
`;

const HeaderWrapper = styled.div``;

const Btn = styled.button``;

export default Header;
