const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7549964e01fbb262a7fac99ec6bcff6e&units=metric'


module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (response) {
				return response.data.main.temp;
			}).catch(function (error) {

			console.log('CATCH API: ', error.response.data.message);
			return error.response.data.message;
		})
	}
}


// NO ANDA EL CORRECTO
// module.exports = {
// 	getTemp: function (location) {
// 		var encodedLocation = encodeURIComponent(location);
// 		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

// 		return axios.get(requestUrl).then(function (response) {
// 				console.log(response)
// 				return response
// 			}).catch(function (err) {
// 				console.log('getTemp:', err.response.data.message)
				
// 				return err.response.data.message
// 			});
// 	}
// }


// NO ANDA EL ERROR
// module.exports = {
// 	getTemp: function (location) {
// 		var encodedLocation = encodeURIComponent(location);
// 		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

// 		return axios.get(requestUrl).then(function (response) {
			
// 			if (response.data.cod === "502" && response.data.message) {
// 				console.log(response.data.message);
// 				return response.data.message
// 				// throw new Error (response.data.message);
// 			} else {
// 				console.log(response.data.main.temp);
// 				return response.data.main.temp;
// 			}
// 		}, function (response) {
// 			console.log(response)
// 			console.log('Algo fallo: ', response.data.message);
// 			throw new Error (response.data.message);
// 		})
// 	}
// }