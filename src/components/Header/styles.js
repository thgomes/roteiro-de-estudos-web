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
    color: #f1f1f1;
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 4px;
    transition: 0.3s;
    text-decoration: none;

    & + a:hover {
      background-color: #f1f1f1;
      color: #7289da;
    }
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
