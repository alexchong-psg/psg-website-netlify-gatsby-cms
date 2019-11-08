import React from 'react';
import { Link } from 'gatsby';

import Tile from 'react-bulma-components/lib/components/tile';
import Box from 'react-bulma-components/lib/components/box';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

import Img from 'gatsby-image';

import './miniprofile.scss';

class MiniProfile extends React.Component {
  state = {
    show: false
  };

  open = () => this.setState({ show: true });
  close = () => this.setState({ show: false });
  render() {
    const { profile } = this.props;
    let featuredImgFixed = profile.frontmatter.image.childImageSharp.fixed;
    let featuredImgFluid = profile.frontmatter.image.childImageSharp.fluid;
    return (
      <Tile kind="parent" className="profile-card">
        <Box>
          <Link to={profile.fields.slug} key={profile.id}>
            <Tile renderAs="article" kind="child" notification color="primary">
              <Img fluid={featuredImgFluid} />
              <Media>
                <Media.Item>
                  <Heading size={4}>{profile.frontmatter.name}</Heading>
                  <Heading subtitle size={6}>
                    {profile.frontmatter.title}
                  </Heading>
                </Media.Item>
              </Media>
              <Content>{profile.excerpt}</Content>
            </Tile>
          </Link>
        </Box>
      </Tile>
    );
  }
}

export default MiniProfile;
