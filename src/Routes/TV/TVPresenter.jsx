import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>TV shows | Gotcha!!</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated && topRated.length > 0 && (
            <Section title="Top Rated">
              {topRated.map((tv) => (
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
          {popular && popular.length > 0 && (
            <Section title="Popular">
              {popular.map((tv) => (
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
          {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today">
              {[
                airingToday.map((tv) => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    imageUrl={tv.poster_path}
                    title={tv.original_name}
                    rating={tv.vote_average}
                    year={
                      tv.first_air_date && tv.first_air_date.substring(0, 4)
                    }
                  />
                )),
              ]}
            </Section>
          )}
          {error && <Message text={error} color="#e84393" />}
        </Container>
      )}
    </>
  );
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
