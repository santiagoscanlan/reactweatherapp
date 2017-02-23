const React = require('react');

const WeatherForm = React.createClass({
	
	onButtonClick: function (e) {
		e.preventDefault();
		
		let location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = ''
			this.props.onSearch(location);
		}
	},

	render: function () {
		return (
			<div>
				<form onSubmit={this.onButtonClick} >
					<input type='search' ref='location' placeholder="Ingresar ciudad" />
					<button className="hollow button expanded">Buscar</button>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;