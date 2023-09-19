import styled from "styled-components";

export const GameBox = styled.button`
  height: 30vh;
  width: 30vw;
  background-color: ${(props) => (props.colorchange ? "red" : "green")};
  color: white;
`;
