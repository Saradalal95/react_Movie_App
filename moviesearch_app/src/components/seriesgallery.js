import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavorite } from "../action";
import * as BsIcons from "react-icons/bs";
const SeriesGallery = (props) => {
  const [series, setSeries] = useState({
    show: false,
    seriesPreview: "",
    title: "",
    type: "",
    year: "",
  });
  const handleClose = () =>
    setSeries({
      show: false,
      seriesPreview: "",
      title: "",
      type: "",
      year: "",
    });
  const seriesShow = (poster, title, type, year) => {
    setSeries({
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
                    variant="top"
                    src={elm.Poster}
                    height="300"
                    className="objectfit"
                    onClick={() =>
                      seriesShow(elm.Poster, elm.Title, elm.Type, elm.Year)
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
          <Modal show={series.show} onHide={handleClose}>
            <Modal.Header
              style={{ backgroundColor: "#030617" }}
              className="cardBorder "
            >
              <Image className="modalImg" fluid src={series.moviePreview} />
            </Modal.Header>
            <Modal.Body className="cardBodyColor">
              <Modal.Title>{series.title}</Modal.Title>
              <p>{`Type: ${series.type}`}</p>
              <p>{`Year: ${series.year}`}</p>
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
    data: state.seriesResults,
    favList: state.favoriteResults,
  };
};
export default connect(mapStateToProps, { addToFavorite })(SeriesGallery);
