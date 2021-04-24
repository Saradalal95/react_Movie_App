import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Modal,
  Button,
  Image,
} from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavorite } from "../action";
import * as BsIcons from "react-icons/bs";
const SearchGallery = (props) => {
  const addBtnFav = (elm) => {
    props.addToFavorite(elm);
    console.log("this is add fav" + elm);
  };
  const [preview, setPreview] = useState({
    show: false,
    moviePreview: "",
    title: "",
    type: "",
    year: "",
  });
  const handleClose = () =>
    setPreview({
      show: false,
      moviePreview: "",
      title: "",
      type: "",
      year: "",
    });
  const previewShow = (poster, title, type, year) => {
    setPreview({
      show: true,
      moviePreview: poster,
      title: title,
      type: type,
      year: year,
    });
  };
  switch (props.data.status) {
    case "START":
      return <h1>LOADING...</h1>;
    case "FAILED":
      return <h1>FAILED</h1>;
    case "SUCCESS":
      return (
        <Container>
          <Row className="mt-2">
            {props.data.data ? (
              props.data.data.map((elm, idx) => (
                <Col key={idx} xs={12} sm={12} md={4} lg={3} className="mt-2">
                  <Card className="m-auto" style={{ width: "14.7rem" }}>
                    <Card.Img
                      onClick={() =>
                        previewShow(elm.Poster, elm.Title, elm.Type, elm.Year)
                      }
                      className="objectfit"
                      variant="top"
                      src={elm.Poster}
                      height="300"
                    />
                    <Card.Body className="cardBodyColor">
                      <Card.Title
                        className="text-center"
                        style={{ height: "2.7rem" }}
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
                      {/* <Card.Text className="text-center">{elm.Type}</Card.Text> */}
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <h1>Movie is Not available</h1>
            )}
          </Row>
          <Modal show={preview.show} onHide={handleClose}>
            <Modal.Header style={{ backgroundColor: "#030617" }}>
              <Image className="modalImg" fluid src={preview.moviePreview} />
            </Modal.Header>
            <Modal.Body className="cardBodyColor">
              <Modal.Title>{preview.title}</Modal.Title>
              <p>{`Type: ${preview.type}`}</p>
              <p>{`Year: ${preview.year}`}</p>
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
    data: state.results,
    favList: state.favoriteResults,
  };
};
export default connect(mapStateToProps, { addToFavorite })(SearchGallery);
