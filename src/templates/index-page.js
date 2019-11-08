import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Columns from 'react-bulma-components/lib/components/columns';
import Helmet from 'react-helmet';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import Layout from '../components/LayoutWrapper';
import HomeCarousel from '../components/HomeCarousel';
import ServiceTile from '../components/ServiceTile';
import Content, { HTMLContent } from '../components/Content';

import './index-page.scss';

export const IndexPageTemplate = ({
  slideshow,
  services,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="index-container">
      <HomeCarousel slideshow={slideshow} />

      <Fade>
        <PageContent className="header-content" content={content} />
      </Fade>
      <Columns className="our-services-container" style={{}}>
        <h1
          style={{
            margin: '30px',
            fontSize: '36px',
            fontWeight: '400'
          }}
        >
          Our Services
        </h1>
      </Columns>

      <Columns className="services-container">
        {services &&
          services.map(({ title, blurb }, idx) => (
            <Columns.Column size={4}>
              <Zoom key={`services-${title}`}>
                <ServiceTile idx={idx} title={title} blurb={blurb} />
              </Zoom>
            </Columns.Column>
          ))}
      </Columns>
    </div>
  );
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
      <IndexPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        slideshow={post.frontmatter.slideshow}
        services={post.frontmatter.services}
        content={post.html}
      />
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
        slideshow {
          blurb
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
        services {
          blurb
          title
        }
      }
    }
  }
`;
