import Vue from 'vue'
var moment = require('moment');

Vue.use(require('vue-resource'))
Vue.http.headers.common['Authorization'] = ""

console.log(Vue)
class RestStore {
	constructor(deviceId, meaning, maximum) {
		this.data = new Array();
		this.liveData = new Array();
		this.deviceId = deviceId;
		this.meaning = meaning;
		this.currentValue = 0;
		this.maximum = maximum;

		var _this = this;

		window.setInterval(function() {
			_this.getNewestValue();
		}, 2000);
	}

	getNewestValue() {
		var _this = this;

		Vue.http.get(`https://api.relayr.io/devices/${this.deviceId}/readings`).then(function (response) {
			response.data.readings.forEach(function(reading) {
				if (reading.meaning == _this.meaning) {
					_this.currentValue = reading.value * 1/_this.maximum;
					_this.liveData.push({'value': reading.value, 'timestamp': moment().unix()})
				}
			});
		}, function (response) {
			console.log("can't get the last reading");
		});
	}

	getTodaysData() {
		var _this = this;
		var start = moment().startOf('week');

		Vue.http.get(`https://data.relayr.io/history/devices/${this.deviceId}?start=${start}&meaning=${this.meaning}`).then(function (response) {
			_this.data = response.data.results[0].points
		}, function (response) { 
			console.log('historic data request failed.') 
		});
	}
}

export {RestStore};
