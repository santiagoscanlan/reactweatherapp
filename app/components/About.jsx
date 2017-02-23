const React = require('react');

const About = React.createClass({
	render: function () {
		return (
			<div>
				<div className="text-center">
				<h1 className="page-title">Sobre mí</h1>
				<img className="thumbnail" src="https://media.licdn.com/media/AAEAAQAAAAAAAAbfAAAAJDdkM2U4ZDM4LWNjZWUtNGU1Zi04NmEzLWU3OTk5NDEyZjVlMA.jpg" alt="Santi" />
				</div>
				<p>
					Me llamo Santi y este es mi primer proyecto con React, la librería de Facebook. Esta app se conecta con la API de Open Weather Map y trae la temperatura de la ciudad que ingresa el usuario.
				</p>
				<div class="card" >
				  <div class="card-divider">
				    <h4>Contacto:</h4>
				  </div>
				  <div class="card-section">
				    <ul>
				    	<li>Teléfono: 1552341256</li>
				    	<li>Dirección: Avenida Zaraza 1453</li>
				    </ul>
				  </div>
				</div>
			</div>		
		);
	}
});

module.exports = About;