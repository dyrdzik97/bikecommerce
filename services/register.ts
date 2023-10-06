import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  User,
} from 'firebase/auth';
import { auth, db } from './firebaseConfig';

import 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { IRegisterFormValues } from '../modules/main/models';

const emailRegister = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const registerDatabase = async ({
  id,
  email,
  name,
  surname,
  password,
}: IRegisterFormValues) => {
  await addDoc(collection(db, 'users'), {
    id,
    name,
    surname,
    email,
    addresses: [],
    favorites: [],
    phoneNumber: '',
    photoUrl: null,
    password,
  });

  const auth = getAuth();
  const user = auth.currentUser;
  const displayName = `${name} ${surname}`;

  updateProfile(user as User, {
    displayName: displayName,
    photoURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/1024px-Face-smile.svg.png',
  });
};

export { emailRegister, registerDatabase };
