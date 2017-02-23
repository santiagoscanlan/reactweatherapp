const React = require('react');

const WeatherData = React.createClass({
	render: function () {
		let {temp, location} = this.props;
			return (
				<div>
					<h2 className="text-center">Hacen {this.props.temp}° en {this.props.location}</h2>
				</div>
			);
	}
});

module.exports = WeatherData;