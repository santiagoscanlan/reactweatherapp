const React = require('react');
var {Link} = require('react-router');
const Examples = React.createClass({
	render: function () {
		return (
			<div>
				<h1 className="text-center page-title">Ejemplos</h1>
				<p>Algunos ejemplos que podés probar:</p>
				<ul>
					<li>
						<Link to='/?location=Buenos Aires'>Buenos Aires</Link>
					</li>
					<li>
						<Link to='/?location=Oslo'>Oslo</Link>
					</li>
				</ul>
			</div>
		);
	}
});

module.exports = Examples;