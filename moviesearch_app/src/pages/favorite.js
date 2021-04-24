import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFavorite } from "../action";
import * as AiIcons from "react-icons/ai";
const Favorite = (props) => {
  const removeFav = (idx) => {
    props.removeFavorite(idx);
  };
  return (
    <Container className="mt-5">
      <h2 style={{ color: "white", textAlign: "center" }}>Favorite List</h2>
      <Row>
        {props.favList.map((elm, idx) => (
          <Col key={idx} className="mt-3 mb-3" lg="3" md="4" sm="12" xs="12">
            <Card className="m-auto" style={{ width: "14rem" }}>
              <Card.Img
                className="objectfit"
                variant="top"
                src={elm.Poster}
                height="300"
              />
              <Card.Body className="cardBodyColor">
                <Card.Title
                  style={{ height: "2.2rem" }}
                  className="text-center"
                >
                  <p style={{ fontSize: "14px" }}>{elm.Title}</p>
                </Card.Title>
                <AiIcons.AiFillCloseCircle
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    removeFav(idx);
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    favList: state.favoriteResults,
  };
};
export default connect(mapStateToProps, { removeFavorite })(Favorite);
