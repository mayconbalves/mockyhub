import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase";

export const register = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  signOut(auth);
};
