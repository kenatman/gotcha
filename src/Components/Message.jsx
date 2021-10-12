import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 25px;
  font-weight: 400;
  color: ${(props) => props.color};
`;

const Message = ({ text, color }) => {
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Message;
