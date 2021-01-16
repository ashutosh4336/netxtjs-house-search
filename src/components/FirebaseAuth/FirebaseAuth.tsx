import { FunctionComponent, useState, useEffect } from 'react';
import StyledfirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseAuthConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: '/',
};

const FirebaseAuth: FunctionComponent = () => {
  const [renderAuth, setRenderAuth] = useState(false);

  useEffect(() => {
    if (window) {
      setRenderAuth(true);
    }
    return () => {};
  }, []);

  return (
    <div className="mt-16">
      {renderAuth ? (
        <StyledfirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default FirebaseAuth;
