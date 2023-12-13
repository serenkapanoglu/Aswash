import React from "react";
import styled from "styled-components";
import logo from "~/img/universcopy.png";
import universcopy from "~/img/universlogo.png";

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  justify-content: space-between;
  align-items: center;

  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 8%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 5%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 10%;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;
`;
const Center = styled.div`
  display: flex;
  flex: 2;
  justify-content: right;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    display: none;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    display: flex;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const Logo = styled.h1`
  font-size: 20px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  @media only screen and (min-width: 600px) {
    font-size: 15px;
    margin-right: 15px;
  }
  @media only screen and (min-width: 992px) {
    margin-right: 30px;
    font-size: 20px;
  }
`;

const Button = styled.button`
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.bgPrimary};
  border: 2px solid ${(props) => props.theme.colors.text};
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.bgLight};
    color: ${(props) => props.theme.colors.bgPrimary};
    border: 2px solid darkblue;
  }
  @media only screen and (min-width: 600px) {
    padding: 8px 15px;
  }
  @media only screen and (min-width: 992px) {
    padding: 10px 20px;
  }
`;

const DarkMode = styled.div`
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  background-color: ${(props) => props.theme.colors.light};
  height: 30px;
  width: 30px;
  border-radius: 100%;
  cursor: pointer;
`;

const AboutNavbar = ({ mode, setMode }) => {
  return (
    <Container>
      <Left>
        <img alt="copy" src={universcopy} />
        <img alt="copy" src={logo} />
      </Left>
      <Center></Center>
      <Right>
        <Menu>
          <MenuItem>About</MenuItem>
          <MenuItem>Donate</MenuItem>
          <MenuItem>More</MenuItem>
        </Menu>
      </Right>
    </Container>
  );
};

export default AboutNavbar;