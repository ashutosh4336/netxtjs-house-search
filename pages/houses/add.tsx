import { GetServerSideProps, NextApiRequest } from 'next';
import { Fragment } from 'react';
import { loadIdToken } from 'src/auth/firebaseAdmin';
import HouseForm from 'src/components/HouseForm/HouseForm';
import Layout from 'src/components/Layout/layout';

const Add = () => {
  return (
    <Fragment>
      <Layout main={<HouseForm />} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest);

  if (!uid) {
    res.setHeader('location', '/auth');
    res.statusCode = 302;
    res.end();
  }

  return { props: {} };
};

export default Add;
