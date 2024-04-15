import React, { Fragment, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components for navigation
const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color:black;
  
`;

const NavLinkDefault = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin-right: 1rem;
`;
const NavLinkMobile = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-right: 1rem;
`;
const NavLinkHome = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin-right: 1rem;
  @media (min-width: 769px) {
    display: none; /* Hidden on desktop */
  }
`;

const NavigationDesktop = styled.div`
  
  @media (max-width: 769px) {
    display: none; /* Hidden on desktop */
  }
`;

// Styled component for mobile menu button
const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color:white;
  display: block; /* Always displayed */
  
  @media (min-width: 769px) {
    display: none; /* Hidden on desktop */
  }
`;

const MobileMenu = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: ${props => (props.open ? "50vh" : "0")};
  background-color: #fff;
  transition: height 0.3s ease;
  overflow-y: auto;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none; /* Hidden on desktop */
  }
`;

const MenuItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <NavigationDesktop>
          <NavLinkDefault to="/">Home</NavLinkDefault>
          <NavLinkDefault to="/about">About</NavLinkDefault>
          <NavLinkDefault to="/contact">Contact</NavLinkDefault>
          <NavLinkDefault to="/projects">Projects</NavLinkDefault>
        </NavigationDesktop>
        <MenuButton onClick={toggleMenu}>
          ☰
        </MenuButton>
      
        <NavLinkHome to="/">Home</NavLinkHome>
      </NavigationContainer>
      <MobileMenu open={isMenuOpen}>
      <MenuItem>
          <NavLinkMobile to="/" onClick={() => {setIsMenuOpen(false)}}>Home</NavLinkMobile>
        </MenuItem>
      <MenuItem>
          <NavLinkMobile to="/about" onClick={() => {setIsMenuOpen(false)}}>About</NavLinkMobile>
        </MenuItem>
        <MenuItem>
          <NavLinkMobile to="/projects" onClick={() => {setIsMenuOpen(false)}}>Projects</NavLinkMobile>
        </MenuItem>
        <MenuItem>
          <NavLinkMobile to="/contact" onClick={() => {setIsMenuOpen(false)}}>Contact</NavLinkMobile>
        </MenuItem>
      </MobileMenu>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
