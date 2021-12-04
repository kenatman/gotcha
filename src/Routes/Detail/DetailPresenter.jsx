import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  padding: 50px;
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 20px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 30px;
  padding-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
  font-size: 20px;
  width: 70%;
`;

const Item = styled.span`
  line-height: 1.4;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  width: 70%;
  line-height: 1.4;
  opacity: 0.8;
`;

const TrailerContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  bottom: 20px;
  opacity: 0.7;
  overflow-y: auto;
`;

const Trailer = styled.a`
  line-height: 2;
`;

const DetailPresenter = ({ result, error, loading }) => {
  return loading ? (
    <>
      {" "}
      <Helmet>
        <title>Loading... | Gotcha!!</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Gotcha!!
        </title>
      </Helmet>
      {result && (
        <>
          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
          />
          <Content>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                  : require("../../images/no-image.jpeg").default
              }
            />
            <Data>
              <Title>
                {result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>🌟</Divider>
                <Item>
                  {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                  min
                </Item>
                <Divider>🌟</Divider>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
              </ItemContainer>
              <Overview>{result.overview}</Overview>
              <TrailerContainer>
                {result.videos.results.map(
                  (video) =>
                    video.site === "YouTube" && (
                      <Trailer
                        href={`https://www.youtube.com/watch?v=${video.key}`}
                      >
                        <i className="fab fa-youtube"></i> {video.name}
                      </Trailer>
                    )
                )}
              </TrailerContainer>
            </Data>
          </Content>
        </>
      )}
      {error && <Message text={error} color="#e84393" />}
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
