import React from 'react';
import * as Status from '../status';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';



const Weather = ({status, cityName, weatherInfo, lowestTemp, highestTemp}) => {
    switch (status) {
      case Status.LOADING: {
        return <div>天气信息请求中...</div>;
      }
      case Status.SUCCESS: {
        return (
          <div>
            {cityName} {weatherInfo} 最低气温 {lowestTemp} 最高气温 {highestTemp}
          </div>
        )
      }
      case Status.FAILURE: {
        return <div>天气信息装载失败</div> 
      }
      default: {
        throw new Error('unexpected status ' + status);
      }
    }
}

Weather.propTypes = {
    status: PropTypes.string.isRequired,
    city: PropTypes.string,
    weather: PropTypes.string,
    templow: PropTypes.string,
    temphigh: PropTypes.string
};

const mapStateTopProps = (state) => {
  const weatherData = state.weather;

  return {
    status: weatherData.status,
    cityName: weatherData.city,
    weather: weatherData.weather,
    lowestTemp: weatherData.templow,
    highestTemp: weatherData.temphigh
  };
}

export default connect(mapStateTopProps)(Weather);