import styled from 'styled-components';
import background from '../../images/login.png';

export const Background = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  @media screen and (max-width: 768px) {
    background-size: cover;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%; /* Adjust the width to a percentage for responsiveness */
  max-width: 300px; /* Add a max-width to limit the card's width */
  height: 300px; /* Increased height to accommodate the title */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 90%; /* Adjust the width for smaller screens */
  }
`;

export const LoginField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem; /* Adjust the font size for smaller screens */
  }
`;
export const Links = styled.span`
  color: #007bff;
`;
