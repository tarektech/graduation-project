import React from 'react';
import footerStyles from './Footer.module.css';
import { Icon } from '@iconify/react';
import { CiTwitter } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { CiFacebook } from 'react-icons/ci';
import { CiLinkedin } from 'react-icons/ci';

function Footer() {
  return (
    <section className={footerStyles.footer}>
      <div className={`${footerStyles.footerinnercontainer}`}>
        <div className={`${footerStyles.footercard}`}>
          <h5>Exclusive</h5>
          <a href="!#">Subscribe</a>
          <a href="!#">Get 10% off your first order</a>

          <div className={`${footerStyles.iconwrapper}`}>
            <input
              id="email_footer"
              name="email_footer"
              type="email"
              placeholder="Enter your Email"
            />
            <Icon icon="akar-icons:send" />
          </div>
        </div>
        <div className={`${footerStyles.footercard}`}>
          <h5>Support</h5>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Istanbul basaksheir
          </a>
          <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
          <a href="tel:+8801588888888">+88015-88888-88888</a>
        </div>
        <div className={`${footerStyles.footercard}`}>
          <h5>Account</h5>
          <a href="/account">My Account</a>
          <a href="/signup">Login / Register</a>
          <a href="/cart">Cart</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/shop">Shop</a>
        </div>
        <div className={`${footerStyles.footercard}`}>
          <h5>Quick Link</h5>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>
        <div className={`${footerStyles.footercard}`}>
          <h5>Download App</h5>
          <p>Save $3 with App New User Only</p>

          <div className={`${footerStyles.icons}`}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <CiFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <CiTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <CiInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className={`${footerStyles.copyrightcontainer}`}>
        <p className={`${footerStyles.copyRight}`}>
          © 2024 by Exclusive. Proudly created with easytake.site
        </p>
      </div>
    </section>
  );
}

export default Footer;
