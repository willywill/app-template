import React from 'react';
import styled from 'styled-components';
import { Flex, Logo } from '.';
import { WHITE } from '../utils/theme';

const NavbarContainer = styled(Flex)`
  width: 100%;
  height: 50px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.5s ease, background 0.2s ease;
  background: ${WHITE};
`;

const LogoWrapper = styled(Flex)`
  width: 40px;
`;

const Navbar = () => (
  <NavbarContainer>
    <LogoWrapper ml={3} justifyContent="flex-start" alignItems="center">
      <Logo />
    </LogoWrapper>
  </NavbarContainer>
);

export default Navbar;
