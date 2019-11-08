import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Helmet from 'react-helmet';

import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaRegBell,
  FaEnvelope,
  FaPhone,
  FaMobile,
  FaChartLine,
  FaEye
} from 'react-icons/fa';

import Layout from '../components/LayoutWrapper';
import HomeCarousel from '../components/HomeCarousel';
import ServiceTile from '../components/ServiceTile';
import Content, { HTMLContent } from '../components/Content';

import './index-page.scss';

export const IndexPageTemplate = ({
  title,
  slideshow,
  services,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="index-container">
      <HomeCarousel slideshow={slideshow} />

      <PageContent className="header-content" content={content} />

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
        {services.map(({ title, blurb }, idx) => (
          <Columns.Column size={4}>
            <ServiceTile idx={idx} title={title} blurb={blurb} />
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
