import React from 'react';
import { Link, graphql } from 'gatsby';
import Tile from 'react-bulma-components/lib/components/tile';

import Layout from '../components/Layout';

const AboutPage = ({ data }) => {
  console.log('TCL: AboutPage -> data', data);
  return (
    <Layout>
      <h1>Customers</h1>
      <Link to="/">asasdasdadsassad</Link>
    </Layout>
  );
};

export default AboutPage;
