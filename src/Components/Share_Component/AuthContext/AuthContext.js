import React, { useEffect } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebaseConfigure/firebaseConfigure";
import { createContext } from "react";
import { useState } from "react";
export const userContext = createContext();
const auth = getAuth(app);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      onSubscribe();
    };
  }, []);

  const updatePro = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const signGoogle = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signGithub = () => {
    const provider = new GithubAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const authinfo = {
    register,
    login,
    user,
    loading,
    updatePro,
    signGoogle,
    signGithub,
    logout,
  };
  return (
    <div>
      <userContext.Provider value={authinfo}>{children}</userContext.Provider>
    </div>
  );
};

export default AuthContext;
