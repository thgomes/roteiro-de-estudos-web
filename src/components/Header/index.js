import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

import { Container, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <Title to="/">
        <FaBook size={26} />
        <h1>Roteiro de Estudos ENEM</h1>
      </Title>
      <Link to="/about">Sobre</Link>
    </Container>
  );
}
