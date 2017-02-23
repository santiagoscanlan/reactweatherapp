const React = require('react');

const ErrorModal = React.createClass({

	getDefaultProps: function() {
		return ({
			title: 'No se encontraron resultados',
			message: 'Hacé otra búsqueda :)'
		});
	},



	componentDidMount: function() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},

	render: function () {
		let {title, message} = this.props;

		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">Ok!</button>
				</p>
			</div>
		);
	}
});

module.exports = ErrorModal;