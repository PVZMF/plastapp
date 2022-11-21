import styled from "@emotion/styled";
import { LightenDarkenColor } from "lighten-darken-color";

export const GlobalButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 7px 30px;
  border-radius: 7px;
  text-align: center;
  font-size: medium;
  background-color: ${(props) => props.color};
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => LightenDarkenColor(props.color, -20)};
  }
`;
