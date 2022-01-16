import React from 'react'
import '../assets/stylesheets/footer.scss'
const Footer = () => (
    <footer className="footer footer-expand-lg footer-dark bg-dark footer-position">
        <div id="footer_content">
            <div className="copyright_container">
                <span className="text-muted">&copy; {new Date().getFullYear()} Will McComis</span>
            </div>
            <div className="social_container">
            </div>
        </div>
    </footer>

)

export default Footer