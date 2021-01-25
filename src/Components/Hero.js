import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const HeroUnit = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Instance_Soup</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
      </Container>
    </Jumbotron>
  )
}


export default HeroUnit;