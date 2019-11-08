import React from 'react';
import { Link } from 'gatsby';

import Footer from 'react-bulma-components/lib/components/footer';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';

import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

import useSiteMetadata from './SiteMetadata';

import './footer.scss';

const FooterComponent = () => {
  const {
    title,
    description,
    keywords,
    author,
    imageUrl,
    email,
    phone,
    twitter,
    linkedin,
    facebook
  } = useSiteMetadata();
  return (
    <Footer className="footerContainer">
      <Container>
        <Content>
          <Columns>
            <Columns.Column>
              <h3>Follow us</h3>

              <hr />
              <p style={{ textAlign: 'center' }}>
                <a
                  target="_blank"
                  href={twitter}
                  style={{ color: 'rgb(40, 55, 64)' }}
                >
                  <FaTwitter className="footer-icon" />
                </a>

                <a
                  target="_blank"
                  href={facebook}
                  style={{ color: 'rgb(40, 55, 64)' }}
                >
                  <FaFacebook className="footer-icon" />
                </a>

                <a href={linkedin} style={{ color: 'rgb(40, 55, 64)' }}>
                  <FaLinkedin className="footer-icon" />
                </a>
              </p>

              <hr />

              <form
                style={{ width: '310px', margin: '0 auto' }}
                action="https://formspree.io/info@psg-solutions.com"
                method="POST"
              >
                <p style={{ paddingLeft: '10px' }}>
                  Subscribe to mailing list:
                </p>
                <input
                  style={{
                    float: 'right',
                    height: '30px',
                    'border-radius': '0px 5px 5px 0px',
                    color: 'rgb(175, 197, 218)'
                  }}
                  type="submit"
                  value="Subscribe"
                />

                <input
                  required
                  placeholder="Email Address"
                  style={{
                    float: 'right',
                    height: '30px',
                    width: '200px',
                    color: 'rgb(175, 197, 218)'
                  }}
                  type="email"
                  name="_replyto"
                />
              </form>
            </Columns.Column>
            <Columns.Column>
              <h3>PSG Solutions, LLC</h3>
              <hr />
              <p>
                <address>
                  <FaEnvelope className="footer-icon" />
                  <a href={`mailto:${email}`}> {email}</a>
                </address>
              </p>
              <p>
                <FaPhone className="footer-icon" />
                <span>
                  <a href={`tel:${phone}`}>{phone}</a>
                </span>
              </p>
              <hr />
              {/* <hr />
                  <p style={{ textAlign: "right" }}>
                    <a href="http://discovery.ariba.com/profile/AN01442299482">
                      <img
                        alt="View PSG Solutions, LLC profile on Ariba Discovery"
                        border="0"
                        src="https://service.ariba.com/an/p/Ariba/badge_145x30.jpg"
                      />
                    </a>
                  </p> */}
            </Columns.Column>
          </Columns>
          <hr />
          <Columns className="footerLinksContainer">
            <Link to="/" className="footerLinks">
              Home
            </Link>
            |
            {/* <Link  toTop to="/news">
              News and Events
            </Link>
            | */}
            <Link toTop to="/customers" className="footerLinks">
              Customers
            </Link>
            |{/* <Link  toTop to='/community'>Community</Link> */}
            {/* <Link  toTop to="/blog">
              Blog
            </Link>
            | */}
            <Link toTop to="/about" className="footerLinks">
              About
            </Link>
            |
            <Link toTop to="/contact" className="footerLinks">
              Contact
            </Link>
          </Columns>
          <hr />
          <Columns className="footerLinksContainer">
            <p>&copy; 2019 PSG Solutions, LLC</p>
          </Columns>
        </Content>
      </Container>
    </Footer>
  );
};

export default FooterComponent;
