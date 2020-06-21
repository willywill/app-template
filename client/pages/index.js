import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Text, Icon } from '../components/ui';
import Layout from '../components/ui/Layout';
import { INFO_COLOR, shiftHSL } from '../components/utils/theme';

const Heading = styled.h1`
  color: ${INFO_COLOR};
  font-family: 'Roboto';
`;

const Home = () => (
  <Layout>
    <Flex pt={2} align="center" column>
      <Flex align="center">
        <Heading>Hello World!</Heading>
      </Flex>
      <Box my={2}>
        <Icon size="2x" icon={['fas', 'bolt']} color={shiftHSL({ lightness: 10 }, INFO_COLOR)} />
      </Box>
      <Box mt={3} maxWidth={600} px={2}>
        <Text lighter>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Enim, delectus itaque harum exercitationem earum corrupti,
          animi inventore reiciendis odio quo sint quisquam nesciunt,
          nisi aperiam possimus libero molestias saepe autem pariatur quibusdam eaque totam.
          Iure quia excepturi placeat sapiente. Nisi!
        </Text>
      </Box>
    </Flex>
  </Layout>
);

export default Home;
