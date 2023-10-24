import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  background-color: #00a7c4;
  padding: 1rem;
  text-align: center;
  color: white;
`;

function Footer() {
  return <Foot>© 2023 Snusy. All rights reserved.</Foot>;
}

export default Footer;
