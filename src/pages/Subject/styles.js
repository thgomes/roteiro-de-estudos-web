import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;

  ul {
    list-style-type: none;

    li {
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: 0.2s;

      strong {
        font-size: 16px;
        cursor: pointer;
      }

      & + li {
        border-top: solid 1px #eee;
      }

      &:hover {
        color: #7289da;
      }
    }
  }
`;
