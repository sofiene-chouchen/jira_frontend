import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100%;
  height: 38.8px;
  background-color: white;
  border-bottom: 0.5px solid #d9d9d9;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 5px 0;
  display: flex;
`;
export const Logo = styled.div`
  color: #484848;
  font-size: x-large;
  width: fit-content;
`;
export const Links = styled.div`
  margin-left: 75px;
  padding-top: 5px;
  display: flex;
`;
export const LinksItems = styled.div`
  padding-bottom: 3px;
  margin-right: 50px;

  &:hover {
    bottom: 0;
    color: blue;
    left: 0;
    width: 100%;
    border-bottom: 1px solid blue;
    box-sizing: border-box;
  }
`;
export const User = styled.div`
  position: absolute;
  right: 120px;
  top: 8px;
`;
