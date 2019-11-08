import React from 'react';

import Layout from '../components/LayoutWrapper';
import brandsserved from '../img/customers.png';
import backgroundimage from '../img/customer.jpg';
import contravent from '../img/Contravent.jpg';
import gsma from '../img/gsma.png';
import inglisjane from '../img/InglisJane.png';

import './customers.scss';
import Columns from 'react-bulma-components/lib/components/columns';
const AboutPage = ({ data }) => {
  console.log('TCL: AboutPage -> data', data);

  const backgroundImageStyle = {
    backgroundImage: `url('${backgroundimage}')`,
    backgroundSize: 'cover'
  };
  return (
    <Layout
      style={{
        'font-family': 'Century Gothic, CenturyGothic, AppleGothic, sans-serif'
      }}
    >
      <Columns>
        <Columns.Column size={12}>
          <div className="headerContainer" style={backgroundImageStyle}>
            <h1>Customers</h1>
          </div>
        </Columns.Column>
      </Columns>
      {/* <Link to="/">asasdasdadsassad</Link> */}

      <Columns>
        <Columns.Column size={5} offset={1}>
          <h1 style={{ color: 'rgb(6, 68, 120)', 'font-weight': 'bold' }}>
            A few of Our Clients...
          </h1>
          <a href="http://www.contravent.com/" target="_blank">
            <h3 className="customer-title-container">
              <img style={{ height: '50px' }} src={contravent} />
              Contravent
            </h3>
          </a>
          <p style={{ 'font-size': '16px' }}>
            Contravent helps brands make real progress towards their goals by
            creating meaningful experiences.
          </p>

          <a href="https://www.gsma.com/" target="_blank">
            <h3 className="customer-title-container">
              <img style={{ height: '50px' }} src={gsma} /> GSMA
            </h3>
          </a>
          <p style={{ 'font-size': '16px' }}>
            The GSMA represents the interests of mobile operators worldwide,
            uniting nearly 800 operators with more than 300 companies in the
            broader mobile ecosystem, including handset and device makers,
            software companies, equipment providers and internet companies, as
            well as organisations in adjacent industry sectors.
          </p>

          <a href="https://www.inglisjane.co.uk/" target="_blank">
            <h3 className="customer-title-container">
              <img style={{ height: '40px' }} src={inglisjane} />
              InglisJane
            </h3>
          </a>
          <p style={{ 'font-size': '16px' }}>
            Inglis jane (ij) provide interim delivery teams for new ICT products
            and programmes from their talent pools of >350 freelance contractors
            and consultants. As well as contract and permanent recruitment
            services ij provide full service consultancy and managed services to
            clients such as Vodafone and GSMA.
          </p>
          <br />
        </Columns.Column>

        <Columns.Column size={5} offset={1}>
          <h1 style={{ color: 'rgb(6, 68, 120)', 'font-weight': 'bold' }}>
            Brands Served...
          </h1>
          <img style={{ height: '450px' }} src={brandsserved} alt="brands" />
        </Columns.Column>
      </Columns>
      <Columns>
        <br />
        <p
          style={{
            textAlign: 'center',
            fontSize: '12px',
            color: 'dimgrey',
            width: '100%'
          }}
        >
          Note: Inclusion of clients and brands does not imply an endorsement of
          PSG Solutions, PSG will supply references upon demand.
        </p>
        <br />
        <br />
      </Columns>
    </Layout>
  );
};

export default AboutPage;
