import '../styles/globals.css'
import {getMessaging, getToken, onMessage} from "firebase/messaging";
import firebase from "../plugins/firabase";
import {useEffect} from "react";

const vapidKey = 'BEM3Scca5ecvz8Lthmnr4fXiE_L61OUP8g5X0izB0vq2K4tf2hXnpbe8wGRrcapY5K_zWZW8w_hkyWiZBiaGi14';


function MyApp({Component, pageProps}) {


    useEffect(() => {
        const messaging = getMessaging(firebase);

        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            // ...
        });

        getToken(messaging, {vapidKey}).then((currentToken) => {
            if (currentToken) {
                console.log({currentToken})
                // Send the token to your server and update the UI if necessary
                // ...
                onMessage(messaging, (payload) => {
                    console.log('Message received. ', payload);
                    // ...
                });

            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
                // ...
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
        });
    }, [])

    return <Component {...pageProps} />
}

export default MyApp
