import  {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";

// import {
//     getDocs,
//     getFirestore
// } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuq54-gGdnsIM_ZttJpCsXzXG3tFP6-jI",
    authDomain: "asmecma-2d3ad.firebaseapp.com",
    projectId: "asmecma-2d3ad",
    storageBucket: "asmecma-2d3ad.appspot.com",
    messagingSenderId: "792700907688",
    appId: "1:792700907688:web:831b6b85d89bd33937529d"
  };
// init firebase app
 initializeApp(firebaseConfig)
//  init service
// const db = getFirestore()
// collection ref
// const colRef = collection(db,'book')
// get collection data
// getDocs(colRef)
//   .then((snapshot)=>{
//     console.log(snapshot.docs);
//   })


//   test
const db = getDatabase()
export default db
