import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {actions as weatherActions} from '../weather/index';


const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
};

class CitySelector extends React.Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
    }
    render(){
        return (
            <select onChange={this.onChange}>
                {
                    Object.keys(CITY_CODES).map(
                        cityName => {
                            return <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
                        }
                    )
                }
            </select>
            
        )
    }

    componentDidMount(){
        const defaultCity = Object.keys(CITY_CODES)[0];
        this.props.onSelectCity(CITY_CODES[defaultCity]);
    }

    onChange(e){
        const cityCode = e.target.value;
        this.props.onSelectCity(cityCode);
    }
}

CitySelector.propTypes = {
    onSelectCity:PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectCity:(cityCode) => {
            dispatch(weatherActions.fetchWeatherAsync(cityCode));
        }
    }
}

export default connect(null,mapDispatchToProps)(CitySelector);