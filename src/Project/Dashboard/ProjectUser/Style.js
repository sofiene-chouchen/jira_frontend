import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 50px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  box-shadow: 0px 11px 9px -15px #0b0b0b;
  margin-bottom: 30px;
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

export const ProjectCart = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 7px;
  box-shadow: 1px 3px 3px 1px gray;
`;
export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ProjectName = styled.div`
  font-size: 15px;
  padding: 20px 0px 10px 20px;
`;
export const SubName = styled.div`
  font-size: 15px;
  padding: 0px 0px 7px 20px;
`;
export const NumberOfIssue = styled.div`
  background-color: blue;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const TextDeco = styled.div`
  color: white;
  padding-left: 20px;
`;
export const NUmbe = styled.div`
  color: white;
  padding-right: 20px;
`;

export const NoProject = styled.div``;

export const TextHeader = styled.div`
  text-align: center;
`;
export const Image = styled.div`
  text-align: center;
`;
export const TextHint = styled.div`
  text-align: center;
`;
export const Buttons = styled.button`
  background-color: blue;
  color: white;
  padding: 7px;
  text-align: center;
  border-radius: 7px;

  &:hover {
    box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
  }

  cursor: pointer;
`;
export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
