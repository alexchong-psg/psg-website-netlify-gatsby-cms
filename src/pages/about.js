import React from 'react';
import { Link, graphql } from 'gatsby';
import Button from 'react-bulma-components/lib/components/button';
import Tile from 'react-bulma-components/lib/components/tile';
import Image from 'react-bulma-components/lib/components/image';
import Img from 'gatsby-image';
import MiniProfile from '../components/miniprofile';
import Layout from '../components/LayoutWrapper';
import './about.scss';
import backgroundimage from '../img/aboutus.jpg';
import oix from '../img/oix.png';
import oidf from '../img/oidf.png';
import Columns from 'react-bulma-components/lib/components/columns';
// import Link from "../src/components/filteredlink";

export const query = graphql`
  query ProfilesQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/profiles/.*/" } } }
      sort: { fields: frontmatter___weight }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            name
            profile {
              childImageSharp {
                fluid(maxWidth: 640, fit: COVER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
const backgroundImageStyle = {
  backgroundImage: `url('${backgroundimage}')`,
  backgroundSize: 'cover'
};
const AboutPage = ({ data }) => {
  return (
    <Layout
      style={{
        'font-family': 'Century Gothic, CenturyGothic, AppleGothic, sans-serif'
      }}
    >
      <Columns>
        <Columns.Column size={12}>
          <div className="headerContainer" style={backgroundImageStyle}>
            <h1>About Us</h1>
          </div>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column
          size={10}
          offset={1}
          style={{
            fontFamily:
              'Century Gothic, CenturyGothic, AppleGothic, sans-serif',
            fontSize: '21px',
            fontWeight: '500',
            paddingLeft: '7vw',
            paddingRight: '7vw'
          }}
        >
          {/* <h2 style={{"color": "rgb(6, 68, 120)","font-weight": "bold"}}>About PSG Solutions</h2> */}
          <br />
          <p>
            PSG Solutions, LLC (PSG) opened its doors for business in early 2015
            with a single consulting client. While initially focused on
            Identity, big data, and privacy for a core customer set, PSG has
            since grown into a uniquely positioned Software Product Development
            service and Innovation consultancy. With a growing list of
            well-known clients, rapid domestic expansion and a rising
            international presence, PSG is carefully executing a strategy for
            growth while preserving the unique vision of our founding partners.
            <br />
            <br />
            We are guided by a senior leadership team with over 60 years of
            collective experience executing large-scale complex projects in
            high-maturity, global organizations. At PSG , we execute projects
            against a framework of these best practices, while also embracing
            the agility of a small business with a flat management structure.
            Want to hear more? Is your company looking for the flexibility of a
            boutique consultancy? Do you have a product you need to deliver in a
            timely and cost-effective manner? Give us a call, at PSG our number
            one goal will always be your success.
          </p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column
          size={2}
          offset={1}
          style={{
            fontFamily:
              'Century Gothic, CenturyGothic, AppleGothic, sans-serif',
            paddingLeft: '7vw'
          }}
        >
          <Button renderAs={Link} to="/contact" color="button is-link">
            Contact Us
          </Button>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={10} offset={1}>
          <br />
          <br />
          <Tile kind="ancestor">
            <Tile>
              {data.allMarkdownRemark.edges.map(node => (
                <MiniProfile profile={node.node} />
              ))}
            </Tile>
          </Tile>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size={10} offset={1}>
          <br />
          <br />
          <h3 style={{ color: 'rgb(6, 68, 120)', fontSize: '24px' }}>
            PSG Solutions is a contributing member to the following industry
            organizations:
          </h3>
          <Columns.Column size={3} style={{ marginLeft: '-3vw' }}>
            <a href="http://www.openidentityexchange.org/" target="_blank">
              <Image src={oix} height="1px" style={{ marginBottom: '10px' }} />
            </a>
          </Columns.Column>
          <p style={{ 'font-size': '15px' }}>
            The Open Identity Exchange (OIX) is a technology agnostic,
            non-profit trade organization of leaders from competing business
            sectors focused on building the volume and velocity of trusted
            transactions online. OIX enables members to expand existing identity
            services and serve adjacent markets. Members advance their market
            position through joint research and engaging in pilot projects to
            test real world use cases. The results of these efforts are
            published via OIX white papers and shared publicly via OIX
            workshops. OIX members work together to jointly fund and participate
            in pilot projects (sometimes referred to as alpha projects). These
            pilots test business, legal, and/or technical concepts or theory and
            their interoperability in real world use cases. OIX operates the
            OIXnet trust registry, a global, authoritative registry of business,
            legal and technical requirements needed to ensure market adoption
            and global interoperability.
          </p>
          <br />
          <Columns.Column size={3} style={{ marginLeft: '-4vw' }}>
            <a href="http://openid.net/" target="_blank">
              <Image src={oidf} />
            </a>
          </Columns.Column>
          <p style={{ 'font-size': '15px' }}>
            The OpenID Foundation is a non-profit international standardization
            organization of individuals and companies committed to enabling,
            promoting and protecting OpenID technologies. Formed in June 2007,
            the foundation serves as a public trust organization representing
            the open community of developers, vendors, and users. OIDF assists
            the community by providing needed infrastructure and help in
            promoting and supporting expanded adoption of OpenID. This entails
            managing intellectual property and brand marks as well as fostering
            viral growth and global participation in the proliferation of
            OpenID.
          </p>
          <br />
        </Columns.Column>
      </Columns>
    </Layout>
  );
};

export default AboutPage;
