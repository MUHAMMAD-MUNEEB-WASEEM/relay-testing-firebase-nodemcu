import firebase from 'firebase';

const firebaseConfig = {
apiKey: "AIzaSyDNTtKvrDkdC9uFY1Ipm0wp-NTpy4V3sco",
  authDomain: "relay-9e705.firebaseapp.com",
  databaseURL: "https://relay-9e705-default-rtdb.firebaseio.com",
  projectId: "relay-9e705",
  storageBucket: "relay-9e705.appspot.com",
  messagingSenderId: "907591610945",
  appId: "1:907591610945:web:eb6e418079849132c54cc0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;