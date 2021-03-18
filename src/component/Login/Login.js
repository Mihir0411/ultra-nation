import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firbase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  var provider = new firebase.auth.GoogleAuthProvider();

  const googleSignIN = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        const { displayName, email } = result.user;
        const signInUser = { name: displayName, email: email }
        setLoggedInUser(signInUser);
        history.replace(from);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };

  const [option,setOption] = useState('register')
  const [formData, setFormData] = useState({ name: null, password: null })
  const [user,setUser] = useState({})
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }
  const signUp = (e) => {
    firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
      });
      e.preventDefault();
  }
  const signin = ()=>{
    firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    setUser(user.email)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
  return (
    <div>
      <h2>this is login</h2>
      <button onClick={() => googleSignIN()}>Google sign in</button>
      <form action="">
        <input name="email" onChange={(e) => onChangeHandler(e)} type="email" type="text" placeholder="Enter Your Email" required /><br></br>
        <input name="password" onChange={(e) => onChangeHandler(e)} type="password" placeholder="Enter Your Password" required /><br></br>
        <input onClick={signUp} type="submit" />
        <button onClick={() =>setOption('login')}>Log in</button>
      </form>
      {/* <button onChange={(e) => emailSignIN(e)}>Email sign in</button> */}
    </div>
  );

};

export default Login;