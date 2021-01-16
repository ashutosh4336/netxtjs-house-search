import { Fragment } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
import FirebaseAuth from 'src/components/FirebaseAuth/FirebaseAuth';
import Layout from 'src/components/Layout/layout';
import { loadIdToken } from 'src/auth/firebaseAdmin';

const Auth = () => {
  return (
    <Fragment>
      <Layout main={<FirebaseAuth />} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest);

  if (!!uid) {
    res.setHeader('location', '/');
    res.statusCode = 302;
    res.end();
  }

  return { props: {} };
};

export default Auth;
