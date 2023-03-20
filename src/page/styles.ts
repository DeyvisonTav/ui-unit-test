import styled from "styled-components";

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 60%;
`;
export const Image = styled.img`
  height: 60.75rem;
  width: 100%;
`;
export const InputsContainer = styled.div`
  background: white;
  height: 100vh;
  width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  label {
    color: black;
    padding-right: 25rem;
    font-size: 1.2rem;
  }
  img {
    padding-bottom: 4rem;
    width: 13rem;
  }
  p{
    color: red;
    padding-top: 4px;
  }
`;

export const Inputs = styled.input`
  width: 60%;
  padding: 1rem 1rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors["base-title"]};
  border: none;
  color: black;
  transition: 0.4s;
  margin-bottom: 1rem;
  margin-top: 1rem;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    border-color: ${({ theme }) => theme.colors["brand-blue"]};
    outline: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem;
  width: 60%;
  color: white;
  font-weight: bold;
  background: #015399;
  border: none;
  border-radius: 6px;
  margin-top: 1rem;
  transition: 0.4s;
  &:hover {
    transition: 0.4s;
    background: ${({ theme }) => theme.colors["base-text"]};
  }
`;
