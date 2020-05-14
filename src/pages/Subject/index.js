import React, { useState, useEffect } from 'react';
import { FaSquare } from 'react-icons/fa';

import api from '../../services/api';
import { Container } from './styles';

export default function Subject({ match }) {
  const { subject } = match.params;
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function loadTopics() {
      const response = await api.get(`/subjects/${subject}`);

      const { data } = response;

      setTopics(data);
    }

    loadTopics();
  }, []);

  return (
    <Container>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <strong>{topic}</strong>
            <FaSquare />
          </li>
        ))}
      </ul>
    </Container>
  );
}
