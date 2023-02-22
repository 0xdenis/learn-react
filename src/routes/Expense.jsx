import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Expense() {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-6">
            Name
          </Col>
          <Col className="col-6">
            Denis
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Expense;
