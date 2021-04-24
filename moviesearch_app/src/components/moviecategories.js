import React from "react";
import {  Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { getMovieData } from "../action";
import { connect } from 'react-redux'

const MovieCategories = ({ getMovieData }) => {
  const searchMovieCategoryOnClick = (e) => {
    getMovieData(e.target.name);
  };

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <div className="seriesBtnGroup">
            <h1 className="series">Movies</h1>
            <DropdownButton id="dropdown-basic-button" title="Categories">
              <Dropdown.Item
                name="action"
                onClick={searchMovieCategoryOnClick}>Action</Dropdown.Item>
              <Dropdown.Item
                name="thriller"
                onClick={searchMovieCategoryOnClick}>Thriller</Dropdown.Item>
              <Dropdown.Item
                name="horror"
                onClick={searchMovieCategoryOnClick}>Horror</Dropdown.Item>
              <Dropdown.Item
                name="drama"
                onClick={searchMovieCategoryOnClick}>Drama</Dropdown.Item>
              <Dropdown.Item
                name="comedy"
                onClick={searchMovieCategoryOnClick}>Comedy</Dropdown.Item>
              <Dropdown.Item
                name="documentary"
                onClick={searchMovieCategoryOnClick}>Documentary</Dropdown.Item>
              <Dropdown.Item
                name="animation"
                onClick={searchMovieCategoryOnClick}>Animation</Dropdown.Item>
              <Dropdown.Item
                name="anime"
                onClick={searchMovieCategoryOnClick}>Anime</Dropdown.Item>
              <Dropdown.Item
                name="science fiction"
                onClick={searchMovieCategoryOnClick}>Sci-Fi</Dropdown.Item>
              <Dropdown.Item
                name="cartoon"
                onClick={searchMovieCategoryOnClick}>Cartoon</Dropdown.Item>
              <Dropdown.Item
                name="crime"
                onClick={searchMovieCategoryOnClick}>Crime</Dropdown.Item>
              <Dropdown.Item
                name="love"
                onClick={searchMovieCategoryOnClick}>Love</Dropdown.Item>
            </DropdownButton>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default connect(null, { getMovieData })(MovieCategories);
