import React from 'react';
import { FaSquare, FaSq } from 'react-icons/fa';

import { Container } from './styles';

export default function Subject() {
  return (
    <Container>
      <div>
        <h2>Matemática</h2>
        <strong>Progresso: 88%</strong>
      </div>
      <ul>
        <li>
          <strong>Assunto 1 sobre não sei o que</strong>
          <FaSquare />
        </li>
        <li>
          <strong>Assunto 1 sobre não sei o que</strong>
        </li>
        <li>
          <strong>Assunto 1 sobre não sei o que</strong>
        </li>
        <li>
          <strong>Assunto 1 sobre não sei o que</strong>
        </li>
      </ul>
    </Container>
  );
}
