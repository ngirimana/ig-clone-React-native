
import React, { useEffect } from "react";
import { SignedInStack, SignedOutStack } from "./Navigation";
import firebase from "firebase";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);
  useEffect(
    () => firebase.auth().onAuthStateChanged((user) => userHandler(user)),
    []
  );
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
