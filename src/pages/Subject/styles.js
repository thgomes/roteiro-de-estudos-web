import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
      background-color: #7289da;
      padding: 3px 4px;
      border-radius: 4px;
    }
  }

  ul {
    list-style-type: none;
    margin-top: 10px;

    li {
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: 0.2s;

      & + li {
        border-top: solid 1px #eee;
      }

      &:hover {
        color: #7289da;

        svg {
          display: block;
        }
      }

      svg {
        display: none;
      }
    }
  }
`;
