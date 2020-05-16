import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  border-radius: 4px;
  margin: 20px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 4px;
    transition: 0.3s;
    text-decoration: none;
  }
`;

export const Title = styled(Link)`
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    padding: 10px;
  }
`;
