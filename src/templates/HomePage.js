import React from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import CookieConsent, { Cookies } from "react-cookie-consent"



// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    
    <CookieConsent
      style={{
        background: "#ffd60aff",
        
      }}
      debug={true}
      buttonStyle={{ 
        background: "white",
        color: "black",
    }}
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
<span style={{ fontSize: "10px",color: "black" }}>We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners{" "}</span>
    </CookieConsent>

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
  
)
  


// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)



export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
