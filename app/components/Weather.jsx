const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherData = require('WeatherData');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({

	getInitialState: function() {
		return {
			isLoading: false,
			cityNotFound: false,
			location: '',
		}
	},

	handleSearch: function (location) {
		this.setState({isLoading: true})

		var that = this;

		openWeatherMap.getTemp(location).then( function (temp) {
			console.log('temp es: ', temp)
			for (var i in temp) {
				console.log('propiedad de temp: ', i)
			}
			if (temp == 'Error: Not found city' || temp == 'city not found') {
				that.setState({
					isLoading: false,
					cityNotFound: true,
					location: '',
					temp: '',
				});				
			} else {
				that.setState({
					isLoading: false,
					cityNotFound: false,
					location: location,
					temp: temp,
				});	
			}

		}).catch(function (errorMessage) {
			console.log( 'getTempCATCH', errorMessage);
			that.setState({
				isLoading: false,
				cityNotFound: true,
			
			});
		})	
	},

	render: function () {
		let {isLoading, cityNotFound, location, temp} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <h3 className="text-center">Buscando datos del clima...</h3>
			} else if (cityNotFound) {
				return <ErrorModal title={"No se encontró esa ciudad"} message={"Hacé otra búsqueda :)"} />
				// return <h3 className="text-center">No se encontró esa ciudad</h3>
			} else if (location){
				return <WeatherData location={location} temp={temp}/>
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Buscar clima:</h1>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;



