import styled from 'styled-components';

export const SubjectList = styled.ul`
  list-style-type: none;

  li {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px 10px;
    font-size: 18px;

    div {
      display: flex;
      align-items: center;
    }

    span {
      color: #fff;
      background-color: #222;
      padding: 2px 4px;
      border-radius: 4px;
    }
  }
`;
