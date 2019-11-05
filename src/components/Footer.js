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
  const { title, description, keywords, author, imageUrl } = useSiteMetadata();
  return (
    <Footer className="footerContainer">
      <Container>
        <Content>
          <Columns>
            <Columns.Column>
              <h3>Follow us</h3>

              <hr
                style={{
                  backgroundColor: 'rgb(175, 197, 218)',
                  textAlign: 'center'
                }}
              />
              <p style={{ textAlign: 'center' }}>
                <a
                  target="_blank"
                  href="https://twitter.com/PSG_Solutions"
                  style={{ color: 'rgb(40, 55, 64)' }}
                >
                  <FaTwitter
                    style={{ margin: 10, color: 'rgb(175, 197, 218)' }}
                  />{' '}
                </a>

                <a
                  target="_blank"
                  href="https://www.facebook.com/PSG-Solutions-395695613940022/"
                  style={{ color: 'rgb(40, 55, 64)' }}
                >
                  <FaFacebook
                    style={{ margin: 10, color: 'rgb(175, 197, 218)' }}
                  />{' '}
                </a>

                <a
                  href="https://www.linkedin.com/company/4847749/"
                  style={{ color: 'rgb(40, 55, 64)' }}
                >
                  <FaLinkedin
                    style={{ margin: 10, color: 'rgb(175, 197, 218)' }}
                  />
                </a>
              </p>

              <hr
                style={{
                  backgroundColor: 'rgb(175, 197, 218)',
                  textAlign: 'center'
                }}
              />

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
              <hr
                style={{
                  backgroundColor: 'rgb(175, 197, 218)',
                  textAlign: 'center'
                }}
              />
              <p>
                <address>
                  {' '}
                  <FaEnvelope />
                  <a href="mailto:info@psg-solutions.com">
                    {' '}
                    info@psg-solutions.com
                  </a>
                </address>
              </p>
              <p>
                <FaPhone />
                <span>
                  <a href="tel:+1-520-829-9792"> +1 (520) 829-9792</a>
                </span>
              </p>
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
          <hr
            style={{
              backgroundColor: 'rgb(175, 197, 218)',
              textAlign: 'center'
            }}
          />
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
            <Link toTop to="/contact-us" className="footerLinks">
              Contact
            </Link>
            <hr
              style={{
                backgroundColor: 'rgb(175, 197, 218)',
                textAlign: 'center'
              }}
            />
          </Columns>
          <hr
            style={{
              backgroundColor: 'rgb(175, 197, 218)',
              textAlign: 'center'
            }}
          />
          <Columns className="footerLinksContainer">
            <p>&copy; 2019 PSG Solutions, LLC</p>
          </Columns>
        </Content>
      </Container>
    </Footer>
  );
};

export default FooterComponent;
