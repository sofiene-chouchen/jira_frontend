import styled from 'styled-components';

export const Container = styled.div`
  margin: 5px auto;
  width: 80%;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  box-shadow: 0px 11px 9px -15px #0b0b0b;
  margin-bottom: 30px;
  margin-top: 45px;
`;

export const Title = styled.div`
  padding-top: 10px;
  font-size: 18px;
`;

export const Form = styled.div`
  margin: 1px auto;
  height: 400px;
  border-radius: 10px;
  padding-top: 40px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
export const Label = styled.label`
  font-size: 16px;
  margin-right: 10px;
  width: 100px;
`;
export const Input = styled.input`
  border-radius: 5px;
  border-color: black;
  margin-bottom: 5px;
  width: 300px;
  padding-left: 7px;
`;
export const Buttons = styled.button`
  background-color: blue;
  color: white;
  padding: 7px;
  text-align: center;
  border-radius: 7px;
  width: 200px;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
  }
`;
export const Selector = styled.select`
  width: 200px;
  margin-bottom: 5px;
`;
