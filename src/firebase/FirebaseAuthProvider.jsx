import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOutUser = () => {
    setLoading(true);
    return auth.signOut();
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Current User:", currentUser);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signUpUser,
    signInUser,
    signInWithGoogle,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
