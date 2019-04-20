import { 
  firebase, 
  googleAuthProvider, 
  facebookAuthProvider,
  githubAuthProvider
 } from '../firebase/Firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const logout = () => ({
  type: 'LOGOUT'
})

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

export const startGithubLogin = () => {
  return () => {
    return firebase.auth().signInWithRedirect(githubAuthProvider)
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}

