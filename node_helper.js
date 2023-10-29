/* Magic Mirror Node Helper: MMM-MP3Player
 * By asimhsidd
 *
 * Remade by Pavel Smelov.
 * Version 1.2.0 - 2020.09.14
 * GPLv3 License
 */

const NodeHelper = require("node_helper");
const exec = require('child_process').exec;

module.exports = NodeHelper.create({
	start: function () {
		console.log('Starting module helper MonitorSwitch');
	},

	socketNotificationReceived: function(notification, payload) {
		console.log("++++++++++" + notification);
		switch(notification) {
			case "CONFIG":
				this.config = payload;
				break;
			case "MONITOR_ON":
				exec("/usr/bin/vcgencmd display_power 1", null);
				break;
			case "MONITOR_OFF":
				exec("/usr/bin/vcgencmd display_power 0", null);
				break;
		}
	},
});
