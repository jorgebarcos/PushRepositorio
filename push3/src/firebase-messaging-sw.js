importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyDE2qwKTzImFoNISJdzCl3AfjxYQMtBbSI",
    authDomain: "notification-push-d46d9.firebaseapp.com",
    databaseURL: "https://notification-push-d46d9.firebaseio.com",
    projectId: "notification-push-d46d9",
    storageBucket: "notification-push-d46d9.appspot.com",
    messagingSenderId: "633511189905",
    appId: "1:633511189905:web:2590c91756f65c58308e30"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Nubicom';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});