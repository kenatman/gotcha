import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 30px;
  margin-top: 15px;
`;

const Loader = (props) => {
  return <Container>⏰</Container>;
};

export default Loader;
