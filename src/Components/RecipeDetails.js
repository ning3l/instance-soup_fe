import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const RecipeDetails = () => {
  return (
    <Container class="fluid mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetails;
