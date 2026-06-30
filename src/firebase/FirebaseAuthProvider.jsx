import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userSignUp = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      console.log(crueentUser);
      setLoading(false);
    });
    return () => unSuscribe();
  }, []);
  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    userSignUp,
    userSignIn,
    signInWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
