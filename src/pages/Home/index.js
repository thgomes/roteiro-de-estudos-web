import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

import { SubjectList } from './styles';

export default function Home() {
  return (
    <SubjectList>
      <li>
        <div>
          <FaAngleRight />
          <strong>Matemática</strong>
        </div>
        <span>90%</span>
      </li>
      <li>
        <div>
          <FaAngleRight />
          <strong>Matemática</strong>
        </div>
        <span>90%</span>
      </li>
      <li>
        <div>
          <FaAngleRight />
          <strong>Matemática</strong>
        </div>
        <span>90%</span>
      </li>
      <li>
        <div>
          <FaAngleRight />
          <strong>Matemática</strong>
        </div>
        <span>90%</span>
      </li>
    </SubjectList>
  );
}
