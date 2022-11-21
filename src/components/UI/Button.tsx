import styled from "styled-components";


const Button = styled.button`
  padding: 11px 16px;
  border-radius: 10px;
  border: 1px solid #2628421F;
  background-color: #fff;

  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #262842;
  transition: .3s;

  &:hover {
    background-color: #e7e6e6;
  }
  &:active {
    background-color: #b8b6b6;
  }
`

export default Button