import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SubjectList = styled.ul`
  list-style-type: none;
  background-color: #f1f1f1;
  border-radius: 4px;

  li {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    font-size: 18px;

    & + li {
      border-top: solid 1px #eee;
    }

    div {
      display: flex;
      align-items: center;
    }

    span {
      color: #f1f1f1;
      background-color: #444;
      padding: 2px 4px;
      border-radius: 4px;
    }
  }
`;

export const Subject = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #444;
  transition: 0.3s;

  &:hover {
    color: #7289da;
  }
`;
