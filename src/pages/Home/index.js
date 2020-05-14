import React, { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import api from '../../services/api';

import { SubjectList, Subject } from './styles';

export default function Home() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function loadSubjects() {
      const response = await api.get('/');

      const { subjects } = response.data;

      setSubjects(subjects);
    }

    loadSubjects();
  }, []);

  return (
    <SubjectList>
      {subjects.map((subject) => (
        <li key={subject}>
          <Subject to={`/subjects/${subject}`}>
            <FaAngleRight />
            <strong>{subject}</strong>
          </Subject>
          <span>90%</span>
        </li>
      ))}
    </SubjectList>
  );
}
