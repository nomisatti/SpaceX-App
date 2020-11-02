import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Launch from './components/Launch'
import LaunchDetails from './components/LaunchDetails'

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [launch, setLaunch] = useState(1)
  const handleIdChange = React.useCallback(newId => {
    setLaunch(newId);
  }, []);
  return (

    <div className="App">
      
      <Container fluid>
        <Row>
          <Col xs={12} md={3}><Launch handleIdChange={handleIdChange} /></Col>
          <Col xs={12} md={8}>      <LaunchDetails launch={launch} /></Col>
         
        </Row>
       
      </Container>
      
      
    </div>
  );
}

export default App;
