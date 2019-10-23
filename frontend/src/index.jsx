import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    console.log("Sending request");
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    console.log("Hello world");
    this.setState({ icon: weather.icon.slice(0, -1) });
  }

  render() {
    const { icon } = this.state;

    return (
      <div className="icon">
        <h1> Weather right now in Helsinki</h1>
        {icon && <img src={`/img/${icon}.svg`} />}
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
