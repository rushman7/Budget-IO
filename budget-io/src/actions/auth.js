import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/Firebase';

export const startGoogleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  };
};

export const startFacebookLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider)
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}
