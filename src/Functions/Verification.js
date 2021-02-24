import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyA_94xLsX_gGTrgzCt_cmsyuaXNWw8-I8A",
  authDomain: "confirmemail-c3c35.firebaseapp.com",
  projectId: "confirmemail-c3c35",
  storageBucket: "confirmemail-c3c35.appspot.com",
  messagingSenderId: "307479428163",
  appId: "1:307479428163:web:fbd43a1ba2566144fbe8f6",
  measurementId: "G-C5FQCC2E0G",
};

export function createUser(email, password, firebase) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        return resolve(userData.user);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
export function checkUser() {
  return firebase.getInstance().getCurrentUser();
}
export function errorHandling(error) {
  if (error.code && error.message) {
    if (
      error.code == "auth/email-already-in-use" ||
      error.code == "auth/invalid-email" ||
      error.code == "auth/weak-password"
    ) {
      console.log(error.message);
    } else {
      console.error(error.message);
    }
  } else {
    console.error("Unexpected error");
  }
}
