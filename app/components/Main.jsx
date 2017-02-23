const React = require('react');
const Nav = require('Nav');

var Main = React.createClass({
	render: function () {
		return (
			<div>
				<Nav/>
				<div className="row">
				  <div className="medium-6 large-4 columns small-centered">
					{this.props.children}
				  </div>
				</div>
			</div>
		);
	}
});

module.exports = Main;