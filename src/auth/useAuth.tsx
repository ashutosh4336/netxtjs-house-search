import {
  useEffect,
  useState,
  useContext,
  createContext,
  FunctionComponent,
} from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from './initFirebase';
import { IAuthContext } from 'src/interface/User';
import { removeTokenCookie, setTokenCookie } from './tokenCookies';
import Toast from 'src/utils/sharedMessage';

initFirebase();

const AuthConetxt = createContext<IAuthContext>({
  user: null,
  logout: () => null,
  authenticated: false,
});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const router = useRouter();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        Toast.fire({
          icon: 'success',
          title: 'Signout successfully',
        });
        router.push('/');
      })
      .catch((e) => {
        console.error(e);
        Toast.fire({
          icon: 'error',
          title: 'something went wrong',
        });
      });
  };

  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken();
          setTokenCookie(token);
          setUser(user);
        } else {
          removeTokenCookie();
          setUser(null);
        }
      });

    return () => {
      cancelAuthListener();
    };
  }, []);

  return (
    <AuthConetxt.Provider value={{ user, logout, authenticated: !!user }}>
      {children}
    </AuthConetxt.Provider>
  );
};

export function useAuth() {
  return useContext(AuthConetxt);
}
