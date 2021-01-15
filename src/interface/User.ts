import firebase from 'firebase/app';

export interface IAuthContext {
  user: firebase.User | null;
  logout: () => void;
  authenticated: boolean;
}
