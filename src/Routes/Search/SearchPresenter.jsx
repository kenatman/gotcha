import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 0 10px;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 30px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 30px;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  onSubmit,
  onChange,
}) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="search Movies and TV show..."
          value={searchTerm}
          onChange={onChange}
        />
      </Form>

      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Search Results">
              {movieResults.map((movie) => (
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Search Results">
              {tvResults.map((tv) => (
                <span key={tv.id}>{tv.name}</span>
              ))}
            </Section>
          )}
        </>
      )}
    </Container>
  );
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchPresenter;
