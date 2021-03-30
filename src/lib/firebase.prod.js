import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyCge040NR8BrLljft4Zj0zjOPyBCrHdFsg",
    authDomain: "netflix-clone-8e147.firebaseapp.com",
    projectId: "netflix-clone-8e147",
    storageBucket: "netflix-clone-8e147.appspot.com",
    messagingSenderId: "209717451224",
    appId: "1:209717451224:web:9b9ef25559d1054a7ebaad"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };