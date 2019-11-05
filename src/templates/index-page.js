import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Container from 'react-bulma-components/lib/components/container';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const IndexPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return <PageContent className="content" content={content} />;
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const IndexPage = ({ data }) => {
  const {
    markdownRemark: post,
    site: { siteMetadata }
  } = data;

  return (
    <Layout>
      <Helmet>
        <title>{`${post.frontmatter.title} | ${siteMetadata.title}`}</title>
      </Helmet>
      <Container>
        <IndexPageTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}
        />
      </Container>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
