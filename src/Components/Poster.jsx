import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Rating = styled.span`
  opacity: 0;
  position: absolute;
  bottom: 6px;
  right: 6px;
  transition: opacity 0.2s linear;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Year = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  transition: opacity 0.2s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  font-size: 14px;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imageUrl
                ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
                : require(`../images/no-image.jpeg`).default
            }
          ></Image>
          <Rating>⭐️ {rating} / 10</Rating>
        </ImageContainer>
        <Title>
          {title.length > 15 ? `${title.substring(0, 15)}...` : title}
        </Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
