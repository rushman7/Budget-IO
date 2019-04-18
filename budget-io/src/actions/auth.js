import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/Firebase';

export const startGoogleLogin = () => {
  return () => {
    return firebase.auth().signInWithRedirect(googleAuthProvider)
  };
};

export const startFacebookLogin = () => {
  return () => {
    return firebase.auth().signInWithRedirect(facebookAuthProvider)
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}

