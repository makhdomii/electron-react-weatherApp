import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';
import { WeatherIcon } from '../../common/weatherIcon';
import centigrade from '../../Assets/img/centigrade.svg';
import max from '../../Assets/img/max.svg';
import min from '../../Assets/img/min.svg';
import { Link } from 'react-router-dom';
import API from '../../common/api';

const borderColor = ['Maroon', 'Teal', 'Olive', 'Orange', 'Navy'];
const weatherLocation = weather =>
  weather.map((item, index) => {
    let borderStyle = {
      borderTop: `3px solid ${
        borderColor[Math.floor(Math.random() * borderColor.length)]
        }`
    };
    let todayWeather = item.consolidated_weather[0];
    return (
      <Col key={index} md={2}>
        <Link
          className="none-decoration"
          to={`/weather/${item.woeid}`}
        >
          <div className="text-white text-center home--box" style={borderStyle}>
            {WeatherIcon(todayWeather.weather_state_abbr, 40)}
            <p className="h2">
              {Math.round(todayWeather.the_temp)}{' '}
              <img className="temp-icon" src={centigrade} alt="" />
            </p>
            <p className="h4">{item.title}</p>
            <div>
              <span className="h4">
                <img className="temp-icon" src={max} alt="" />
                {Math.round(todayWeather.max_temp)}
              </span>
              <span className="h4">
                <img className="temp-icon" src={min} alt="" />
                {Math.round(todayWeather.min_temp)}
              </span>
            </div>
          </div>
        </Link>
      </Col>
    );
  });

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      response: []
    };
    this.dataFromServer = {};
  }
  componentWillMount() {
    const london = API.post('44418')
    const istanbul = API.post('2344116')
    const berlin = API.post('638242')
    const helsinki = API.post('565346')
    const dublin = API.post('560743')
    const vancouver = API.post('9807')
    Promise.all([
      london,
      istanbul,
      berlin,
      helsinki,
      dublin,
      vancouver,
    ]).then(res => {
      this.setState({
        response: res,
        loading: false
      })
    })
  }
  search = () => {
    let inputValue = document
      .getElementById('searchField')
      .value.split(' ')
      .join('+');
    if (inputValue.length > 2) {
      this.props.history.push(`/search/${inputValue.toLowerCase()}`);
    }
  };
  render() {
    if (this.state.loading) {
      return <div className="loading" />;
    } else {
      return (
        <div className="home">
          <Container className="home--container">
            <Row className="justify-content-center mt-3 mb-3">
              <Col md={6}>
                <h1 className="text-center mb-2 text-blue">Search your City</h1>
                <InputGroup>
                  <Input
                    type="text"
                    id="searchField"
                    placeholder="For example: Dublin, berlin"
                  />
                  <InputGroupAddon addonType="prepend">
                    <Button color="success" onClick={this.search}>
                      Search
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
            <Row>{weatherLocation(this.state.response)}</Row>
          </Container>
        </div>
      );
    }
  }
}
