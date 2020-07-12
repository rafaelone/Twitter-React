import React from 'react';

import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';

import { Container, Wrapper } from './styles';
import Routes from '../../routes';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Routes />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
