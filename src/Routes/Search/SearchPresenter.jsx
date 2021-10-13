import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
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
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date && movie.release_date.slice(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Search Results">
              {tvResults.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  imageUrl={tv.poster_path}
                  title={tv.original_name}
                  rating={tv.vote_average}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Message text={error} color="#e84393" />}
      {movieResults &&
        tvResults &&
        movieResults.length === 0 &&
        tvResults.length === 0 && (
          <Message text="No Founded Videos..." color="#d63031" />
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
