import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Image,
  Modal,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavorite } from "../action";
import * as BsIcons from "react-icons/bs";
const MovieGallery = (props) => {
  const [movie, setMovie] = useState({
    show: false,
    moviePreview: "",
    title: "",
    type: "",
    year: "",
  });
  const handleClose = () =>
    setMovie({
      show: false,
      moviePreview: "",
      title: "",
      type: "",
      year: "",
    });
  const movieShow = (poster, title, type, year) => {
    setMovie({
      show: true,
      moviePreview: poster,
      title: title,
      type: type,
      year: year,
    });
  };
  const addBtnFav = (elm) => {
    props.addToFavorite(elm);
  };
  switch (props.data.status) {
    case "START":
      return <h1>LOADING...</h1>;
    case "FAILED":
      return <h1>FAILED</h1>;
    case "SUCCESS":
      return (
        <Container>
          <Row>
            {props.data.data.map((elm, idx) => (
              <Col
                key={idx}
                className="mt-3 mb-3"
                lg="3"
                md="4"
                sm="12"
                xs="12"
              >
                <Card className="m-auto" style={{ width: "14rem" }}>
                  <Card.Img
                    className="objectfit"
                    variant="top"
                    src={elm.Poster}
                    height="300"
                    onClick={() =>
                      movieShow(elm.Poster, elm.Title, elm.Type, elm.Year)
                    }
                  />
                  <Card.Body className="cardBodyColor">
                    <Card.Title
                      style={{ height: "2.2rem" }}
                      className="text-center"
                    >
                      <p style={{ fontSize: "14px" }}>{elm.Title}</p>
                    </Card.Title>
                    {!props.favList.some((e) => e.imdbID === elm.imdbID) ? (
                      <BsIcons.BsFillStarFill
                        style={{ cursor: "pointer" }}
                        size={25}
                        onClick={() => {
                          addBtnFav(elm);
                        }}
                      />
                    ) : (
                      <BsIcons.BsBookmarkCheck size={25} />
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Modal show={movie.show} onHide={handleClose}>
            <Modal.Header style={{ backgroundColor: "#030617" }}>
              <Image className="modalImg" fluid src={movie.moviePreview} />
            </Modal.Header>
            <Modal.Body className="cardBodyColor">
              <Modal.Title>{movie.title}</Modal.Title>
              <p>{`Type: ${movie.type}`}</p>
              <p>{`Year: ${movie.year}`}</p>
            </Modal.Body>
            <Modal.Footer className="cardBodyColor">
              <Button
                className="cardBodyColor m-auto"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      );
    default:
      return null;
  }
};
const mapStateToProps = (state) => {
  return {
    data: state.movieResults,
    favList: state.favoriteResults,
  };
};
export default connect(mapStateToProps, { addToFavorite })(MovieGallery);
