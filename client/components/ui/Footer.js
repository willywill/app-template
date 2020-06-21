import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Logo, Text } from '.';
import { DARK_COLOR, WHITE } from '../utils/theme';

const FooterContainer = styled.footer`
  width: 100%;
`;

const Footer = () => (
  <FooterContainer>
    <Flex px={3} justify="space-between" align="center" height="60px" background={DARK_COLOR}>
      <Box width={250}>
        <Text color={WHITE}>
          Copyright © {(new Date().getFullYear())}
        </Text>
      </Box>
      <Box width={100}>
        <Logo banner />
      </Box>
    </Flex>
  </FooterContainer>
);

export default Footer;
