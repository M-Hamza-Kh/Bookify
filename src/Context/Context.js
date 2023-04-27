import { initializeApp } from "firebase/app";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
// export const FirebaseContext = createContext();
// const firebaseConfig = {
//   apiKey: "AIzaSyBUlrLtopnK50WtG4NV9ZbH0_tB9MtNBJI",
//   authDomain: "bookify-b0900.firebaseapp.com",
//   projectId: "bookify-b0900",
//   storageBucket: "bookify-b0900.appspot.com",
//   messagingSenderId: "504161389574",
//   appId: "1:504161389574:web:a3ea664dddbcd9161f4787",
// };

// export const app = initializeApp(firebaseConfig);

// export const FirebaseProvider = (props) => {
//   const auth = getAuth(app);
//   const register = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//     // .then((userCredential) => {
//     //   console.log(userCredential);
//     //   // // Signed in
//     //   // const user = userCredential.user;
//     //   // // ...
//     // })
//     // .catch((error) => {
//     //   console.log(error);
//     //   // const errorCode = error.code;
//     //   // const errorMessage = error.message;
//     //   // // ..
//     // });
//   };
//   return (
//     <FirebaseContext.Provider value={{ register }}>
//       {props.children}
//     </FirebaseContext.Provider>
//   );
// };

const firebasecontext = createContext(null);
export const Usefirebase = () => useContext(firebasecontext);
const firebaseConfig = {
  apiKey: "AIzaSyBUlrLtopnK50WtG4NV9ZbH0_tB9MtNBJI",
  authDomain: "bookify-b0900.firebaseapp.com",
  projectId: "bookify-b0900",
  storageBucket: "bookify-b0900.appspot.com",
  messagingSenderId: "504161389574",
  appId: "1:504161389574:web:a3ea664dddbcd9161f4787",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const db = getDatabase(app);
// const provider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  // const GoogleAuthProvider = () => {
  //   return signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       alert("error");
  //     });
  // };
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("success");
      })
      .catch((error) => {
        alert("error");
      });
  };

  // const datastore = (email, password) => {
  //   set(ref(db, "users/hamza"), {
  //     email: email,
  //     password: password,
  //   });
  // };
  return (
    <firebasecontext.Provider value={{ signup }}>
      {props.children}
    </firebasecontext.Provider>
  );
};
