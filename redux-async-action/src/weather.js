import React,{Component} from 'react';



//TODO: change to your city code according to http://www.weather.com.cn/
const cityCode = 101010100;
const appCode = '30e37351cadf480494cde3aa049f6ba6';

class weather extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            weather:null
        }
    }

    render(){
        if(!this.state.weather){
            return <div>暂时无数据!</div>
        }

        const {city, weather, templow, temphigh, temp} = this.state.weather;

        return (
        <div>
            {city} {weather} 最低气温-{templow}摄氏度 最高气温-{temphigh}摄氏度 当前气温-{temp}摄氏度
        </div>
        )
    }

    componentDidMount() {
        const apiUrl = `http://jisutqybmf.market.alicloudapi.com/weather/query?citycode=${cityCode}`;
        fetch(apiUrl,{
            method:'get',
            headers:{
                'Authorization':`APPCODE ${appCode}`
            }
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                console.log(responseJson.result);
                this.setState({weather: responseJson.result});
            }).catch((error) => {
                this.setState({weather: null});
            });
        }).catch((error) => {
            this.setState({weather: null});
        });
      }
}

export default weather;