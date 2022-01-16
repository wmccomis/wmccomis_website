import React from 'react'
import '../assets/stylesheets/footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

// const PlatformLink = () => <a href="https://platformstud.io" target="_blank" rel="noreferrer">Platform Venture Studio</a>
// const PrivacyLink = () => <a href="privacy" target="_blank">Privacy Policy</a>
// const TosLink = () => <a href="/terms-of-service" target="_blank">Terms of Service</a>
// const SupportLink = () => <a href="/support" target="_blank">Support</a>
/* eslint-disable react/no-unescaped-entities */

const Footer = () => (
    <footer className="footer footer-expand-lg footer-dark bg-dark footer-position">
        <div id="footer_content">
            <div className="copyright_container">
                <span className="text-muted">&copy; {new Date().getFullYear()} Will McComis</span>
            </div>
            <div className="social_container">
                {/* <i className = "fab fa-instagram"></i> */}
            </div>
        </div>
    </footer>

)

export default Footer