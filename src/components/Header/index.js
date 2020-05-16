import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

import { Container, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <Title to="/">
        <img src={logo} alt="roteiro de estudos" />
      </Title>
      <Link to="/about">Sobre</Link>
    </Container>
  );
}
