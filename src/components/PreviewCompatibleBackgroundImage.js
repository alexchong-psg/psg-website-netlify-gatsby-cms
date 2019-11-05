import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

const PreviewCompatibleBackgroundImage = ({
  tag,
  className,
  imageInfo,
  children
}) => {
  const { childImageSharp } = imageInfo;

  if (!!imageInfo && !!imageInfo.childImageSharp) {
    return (
      <BackgroundImage
        tag={tag}
        className={className}
        fluid={imageInfo.childImageSharp.fluid}
      >
        {children}
      </BackgroundImage>
    );
  }

  if (!!childImageSharp) {
    return (
      <BackgroundImage
        tag={tag}
        className={className}
        fluid={childImageSharp.fluid}
      >
        {children}
      </BackgroundImage>
    );
  }

  if (!!imageInfo && typeof imageInfo === 'string') {
    return (
      <div
        style={{
          backgroundImage: `url(${imageInfo})`
        }}
        className={className}
      >
        {children}
      </div>
    );
  }

  return null;
};

PreviewCompatibleBackgroundImage.propTypes = {
  imageInfo: PropTypes.shape({
    tag: PropTypes.string,
    className: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
};

export default PreviewCompatibleBackgroundImage;
