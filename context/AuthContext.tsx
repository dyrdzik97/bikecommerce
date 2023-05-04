import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebaseConfig';

export interface AuthProviderProps {
  children?: ReactNode;
}

export interface AuthContextModel {
  auth: Auth;
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  loading: boolean;
  setLoading: (value: boolean) => void;
  logout: () => void;
  signInWithGoogle: () => void;
}

const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel
);

export const useAuth = (): AuthContextModel => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoadingState] = useState(false);
  const router = useRouter();

  const signUp = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    router.push('/');
  };

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      new Error('error');
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = (email: string): Promise<void> => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    auth.signOut();
    router.push('/');
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        router.push('/user');
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubsrcibe;
  }, []);

  const setLoading = (value: boolean) => {
    setLoadingState(value);
  };

  const values = {
    signUp,
    user,
    signIn,
    resetPassword,
    auth,
    setLoading,
    loading,
    logout,
    signInWithGoogle,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
