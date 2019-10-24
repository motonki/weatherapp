import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

// Helper function to split weather list to sublists of size *size*
function splitList(myList, size) {
  var index = 0;
  var arrayLength = myList.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += size) {
    var myChunk = myList.slice(index, index + size);
    tempArray.push(myChunk);
  }

  return tempArray;
}

class WeatherIcon extends React.Component {
  render() {
    const icon = this.props.data.weather[0].icon.slice(0, -1);
    //const time = new Date();
    //time.setSeconds(this.props.data.dt)
    return (<div className="icon">
      {icon && <img src={`/img/${icon}.svg`} />}
    </div>);
  }
}

// Unfinished feature. Should render eight icons into a row instead of a column
class WeatherRow extends React.Component {
  render() {
    const data = this.props.data.map((item, index) =>
      <WeatherIcon data={item} key={index} />);
    return (
      <div className="row">
        {data}
      </div>
    );
  }
}

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      weathers: [],
      weather_rows: [],
    };
  }

  async componentWillMount() {
    const weather_data = await getWeatherFromApi();
    const weather_list = weather_data.list
    this.setState({ icon: weather_list[0].weather[0].icon.slice(0, -1) });
    //this.setState({ tz: weather_data.city.timezone });
    this.setState({
      weathers: weather_list.map((weather) =>
        weather)
    });
    this.setState({ weather_rows: splitList(weather_list, 8) });
    this.setState({ location: weather_data.city.name })
  }

  render() {
    // variable for older implementation that showed just icons
    const icons = this.state.weathers.map((icon1, index) =>
      <WeatherIcon data={icon1} key={index} />);
    const rows = this.state.weather_rows.map((icon1, index) =>
      <WeatherRow data={icon1} key={index} />);
    return (
      <div className="main-frame container">
        <h1>Weather for next five days in {this.state.location}</h1>
        {rows}
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
