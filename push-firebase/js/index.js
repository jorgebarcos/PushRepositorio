// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyDE2qwKTzImFoNISJdzCl3AfjxYQMtBbSI",
//     authDomain: "notification-push-d46d9.firebaseapp.com",
//     databaseURL: "https://notification-push-d46d9.firebaseio.com",
//     projectId: "notification-push-d46d9",
//     storageBucket: "notification-push-d46d9.appspot.com",
//     messagingSenderId: "633511189905",
//     appId: "1:633511189905:web:2590c91756f65c58308e30"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();
// firebase.messaging.requestPermission()
//     .then(function() {
//         console.log('Tengo Permiso');
//     })
//     .catch(function(err) {
//         console.log('Ocurrio un Error')
//     })


if( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('./sw.js')
        .then(registrado => console.log('Se instalo correctamente... ', registrado) )
        .catch( error => console.log('Falló la instación...', error) )

} else {
    console.log('Services Worker no soportado')
}


