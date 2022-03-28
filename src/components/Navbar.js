import React from 'react';

import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavContainer>
      <Title>cryptle</Title>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  margin: 0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
  text-align: center;
`;
