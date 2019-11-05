import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

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

class ServiceTile extends React.Component {
  render() {
    const { idx, title, blurb } = this.props;
    return (
      <div>
        <div
          style={{
            margin: 'auto auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: 'rgb(80, 106, 141)',
            width: '100px',
            height: '100px',
            borderRadius: '50px'
          }}
        >
          {idx == 0 && (
            <FaMobile
              size={'3em'}
              style={{
                color: 'white',
                backgroundColor: 'rgb(80, 106, 141)',

                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
          )}
          {idx == 1 && (
            <FaChartLine
              size={'3em'}
              style={{
                color: 'white',
                backgroundColor: 'rgb(80, 106, 141)',

                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
          )}
          {idx == 2 && (
            <FaEye
              size={'3em'}
              style={{
                color: 'white',
                backgroundColor: 'rgb(80, 106, 141)',

                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
          )}
        </div>
        <h3
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: '400'
          }}
        >
          {title}
        </h3>
        <p
          style={{
            width: '320px',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '15px'
          }}
        >
          {blurb}
        </p>
      </div>
    );
  }
}

ServiceTile.propTypes = {
  title: PropTypes.string,
  blurb: PropTypes.string
};

export default ServiceTile;
