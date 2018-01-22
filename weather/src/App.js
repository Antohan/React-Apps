import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';
import InputForm from './InputForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0      
    }
  }

  handleSearch = (text) => {
    this.setState({ city: text})
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Simple Weather App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <InputForm onSearchCity={this.handleSearch} />
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
                <WeatherDisplay key={activePlace} city={PLACES[activePlace].name} />
            </Col>
          </Row>
        </Grid>
       
      </div>
    );
  }
}

const PLACES = [
  { name: "Moscow"},
  { name: "Novosibirsk"},
  { name: "Krasnoyarsk"}
];

export default App;
