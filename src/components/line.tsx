import React from "react";
import styled from "styled-components";
import colors from "../utils/theme";

const Container = styled.div`
  width: 3px;
  background-color: rgba(250, 250, 250, 0.5);
  flex-grow: 1;
`;

const Line: React.FC = () => {
  return <Container />;
};
export default Line;
