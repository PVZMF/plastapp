import styled from "@emotion/styled";
import { LightenDarkenColor } from "lighten-darken-color";

export const GlobalButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 7px 30px;
  border-radius: 7px;
  font-size:clamp(0.5rem, 2vw, 1.8rem);
  text-align: center;
  background-color: ${(props) => props.color};
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => LightenDarkenColor(props.color, -20)};
  }
  

`;
