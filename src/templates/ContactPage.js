import React from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import { MapPin, Smartphone, Mail } from 'react-feather'
import './ContactPage.css'
import CookieConsent, { Cookies } from "react-cookie-consent"


// Export Template for use in CMS preview
export const ContactPageTemplate = ({ 
    title,
    body, 
    subtitle, 
    featuredImage, 
    address,
    phone,
    email,
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-analytics"
      acceptOnScroll={true}
      acceptOnScrollPercentage={30}
      onAccept={() => {Cookies.set("gatsby-gdpr-google-analytics", "true"); 
        Cookies.set("gatsby-gdpr-facebook-pixel", "true");
        Cookies.set("gatsby-gdpr-google-tagmanager", "true");
        }}
      hideOnAccept={true}> 
This website uses cookies to enhance the user experience.{" "}
    </CookieConsent>

    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <Content source={body} />
          <div className="Contact--Details">
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
          </div>
        </div>
        </div>
    </section>

    
         
   
  </main>
)

// Export Default HomePage for front-end
const ContactPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <ContactPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
                phone
        email
      }
    }
  }
`
