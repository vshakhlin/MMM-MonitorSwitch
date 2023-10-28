Module.register('MMM-PIR-Sensor',{
	requiresVersion: '2.1.0',
	defaults: {

	},

	userPresence: false,

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
	},

	notificationReceived: function (notification, payload) {
		if (notification === 'SCREEN_WAKEUP') {
			this.sendNotification(notification, payload)
		}
	},*/

	start: function () {
		Log.info('Starting module: ' + this.name);
	}
});
