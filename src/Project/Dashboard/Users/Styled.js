import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 1px auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  box-shadow: 0px 11px 9px -15px #0b0b0b;
  margin-bottom: 30px;
  margin-top: 50px;
`;

export const Title = styled.div`
  padding-top: 10px;
  font-size: 18px;
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 7px;
  border-radius: 7px;

  &:hover {
    box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
  }

  cursor: pointer;
`;
