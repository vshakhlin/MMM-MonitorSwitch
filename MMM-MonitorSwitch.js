Module.register('MMM-MonitorSwitch',{
	requiresVersion: '2.1.0',
	defaults: {

	},

	// Override socket notification handler.
	/*socketNotificationReceived: function (notification, payload) {
		if (notification === 'USER_PRESENCE') {
			this.userPresence = payload;
			this.sendNotification(notification, payload);
			if  (payload === false && this.config.powerSavingNotification === true){
				this.sendNotification("SHOW_ALERT",{type:"notification", message:this.config.powerSavingMessage});
			}
			this.updateDom();
		} else if (notification === 'SHOW_ALERT') {
			this.sendNotification(notification, payload)
		}
	},*/

	notificationReceived: function (notification, payload) {
		console.log('-----------' + notification)
	},

	start: function () {
		Log.info('Starting module: ' + this.name);
		this.sendSocketNotification("CONFIG", this.config);
	}
});
