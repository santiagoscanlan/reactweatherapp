const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
	onSearch: (e) => {
		e.preventDefault();
		alert('todavia no funca');
	},

	render: function () {
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">Happy Weather App!</li>
						<li>
							<IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Buscar clima</IndexLink>
						</li>
						<li> 
							<Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Sobre mí</Link>
						</li>
						<li> 
							<Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Ejemplos</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu align-right">
							<li><input type="search" placeholder="Ingresar ciudad" /></li>
	      					<li><input type="submit" className="button primary" value="Buscar" /></li>
						</ul>
					</form>
				</div>

			</div>
		);
	}
});

module.exports = Nav;
