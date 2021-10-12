import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
`;

// children은 리액트에서 미리 정해진 prop이다. 사이의 값으로 prop을 받아올 수 있다.!!

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOf(
    [PropTypes.arrayOf(PropTypes.node)],
    PropTypes.node
  ),
};

export default Section;
