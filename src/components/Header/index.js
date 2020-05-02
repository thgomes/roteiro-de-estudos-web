import React from 'react';
import { FaBook } from 'react-icons/fa';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <FaBook size={26} />
        <h1>Roteiro de Estudos ENEM</h1>
      </div>
    </Container>
  );
}
