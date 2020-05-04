import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

import { SubjectList, Subject } from './styles';

export default function Home() {
  return (
    <SubjectList>
      <li>
        <Subject to="subject">
          <FaAngleRight />
          <strong>Matemática</strong>
        </Subject>
        <span>90%</span>
      </li>
      <li>
        <Subject>
          <FaAngleRight />
          <strong>Matemática</strong>
        </Subject>
        <span>90%</span>
      </li>
      <li>
        <Subject>
          <FaAngleRight />
          <strong>Matemática</strong>
        </Subject>
        <span>90%</span>
      </li>
      <li>
        <Subject>
          <FaAngleRight />
          <strong>Matemática</strong>
        </Subject>
        <span>90%</span>
      </li>
    </SubjectList>
  );
}
