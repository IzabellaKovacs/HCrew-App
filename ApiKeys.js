import * as firebase from 'firebase';
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig={
      apiKey: "AIzaSyAtp8kkBFn5rpCEFed_dZeaWVdDpE9kPrc",
      authDomain: "firstreactfirebasep.firebaseapp.com",
      projectId: "firstreactfirebasep",
      storageBucket: "firstreactfirebasep.appspot.com",
      messagingSenderId: "456052231132",
      appId: "1:456052231132:web:c7416ec9c4fd7709a15d19",
      measurementId: "G-SM6BS5B2T1",
    };

firebase.initializeApp(firebaseConfig);

export default firebase;
