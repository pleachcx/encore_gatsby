import React, { Component } from 'react'
import CookieConsent, { Cookies } from "react-cookie-consent"

export const Cookie = () => (
    <main>
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
    </main>
)

export default Cookie