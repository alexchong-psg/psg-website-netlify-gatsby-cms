import React from 'react';
import { graphql } from 'gatsby';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import {
  Field,
  Control,
  Label,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Help,
  InputFile
} from 'react-bulma-components/lib/components/form';
import Container from 'react-bulma-components/lib/components/container';
import { Formik } from 'formik';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';

import Layout from '../components/layout';
import backgroundimage from '../img/contactus.jpg';
import './contact.scss';

const Contact = ({ data }) => {
  const {
    site: {
      siteMetadata: { linkedin }
    }
  } = data;

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
            <h1>Contact Us</h1>
          </div>
        </Columns.Column>
      </Columns>
      <Container>
        <Columns>
          <Columns.Column size={3} offset={2}>
            <h1 style={{ 'font-weight': 'bold' }}>Our Information</h1>
            <p className="contactus-container">
              <address>
                <FaEnvelope className="contactus-icon" />

                <a href="mailto:info@psg-solutions.com">
                  info@psg-solutions.com
                </a>
              </address>
            </p>
            <p className="contactus-container">
              <FaPhone className="contactus-icon" />
              <span>
                <a href="tel:+1-520-829-9792">+1 (520) 829-9792</a>
              </span>
            </p>
            <p className="contactus-container">
              <FaLinkedin className="contactus-icon" />
              <span>
                <a href={linkedin}>LinkedIn</a>
              </span>
            </p>
          </Columns.Column>

          <Columns.Column size={5} offset={2}>
            <h1 style={{ 'font-weight': 'bold' }}>Send us a message</h1>
            <br />
            {/* honeypot form */}
            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input name="phone" />
              <textarea name="message"></textarea>
            </form>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.name) {
                  errors.name = 'Required';
                }
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }

                if (!values.message) {
                  errors.message = 'Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                document.theForm.submit();
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                /* and other goodies */
              }) => (
                <form
                  // ref={ref => {
                  //   this.formref = ref;
                  // }}
                  // style={{ width: '310px', margin: '0 auto', float: 'left' }}
                  name="theForm"
                  // action="https://foDDDrmspree.io/info@psg-solutions.com"
                  onSubmit={handleSubmit}
                  data-netlify="true"
                  method="POST"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <Field>
                    <Label>Name*:</Label>
                    <Control>
                      <Input
                        placeholder="name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        color={errors.name && touched.name && 'danger'}
                      />
                    </Control>
                    {errors.name && touched.name && (
                      <Help color="danger">{errors.name}</Help>
                    )}
                  </Field>
                  <Field>
                    <Label>Email*:</Label>
                    <Control>
                      <Input
                        placeholder="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        color={errors.email && touched.email && 'danger'}
                      />
                    </Control>
                    {errors.email && touched.email && (
                      <Help color="danger">{errors.email}</Help>
                    )}
                  </Field>
                  <Field>
                    <Label>Phone:</Label>
                    <Control>
                      <Input
                        placeholder="phone"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        color={errors.phone && touched.phone && 'danger'}
                      />
                    </Control>
                    {errors.phone && touched.phone && (
                      <Help color="danger">{errors.phone}</Help>
                    )}
                  </Field>
                  <Field>
                    <Label>Message*:</Label>
                    <Control>
                      <Textarea
                        placeholder="message"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        color={errors.message && touched.message && 'danger'}
                      />
                    </Control>
                    {errors.message && touched.message && (
                      <Help color="danger">{errors.message}</Help>
                    )}
                  </Field>

                  <Field kind="group">
                    <Control>
                      <Button type="primary">Send</Button>
                    </Control>
                  </Field>
                </form>
              )}
            </Formik>
          </Columns.Column>
        </Columns>
      </Container>
    </Layout>
  );
};

export default Contact;

export const pageQuery = graphql`
  query ContactUs {
    site {
      siteMetadata {
        linkedin
      }
    }
  }
`;
