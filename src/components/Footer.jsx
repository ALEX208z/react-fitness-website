import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaLinkedin} from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'



const Footer = () => {
  return (
    <footer>
        <div className="container footer-container">
            <article>
                <Link to="/" className='logo'>
                    <img src={logo} alt="Footerlogo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus nesciunt suscipit sint iste possimus porro quos expedita explicabo nemo.
                </p>
                <div className="footer-socials">
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><BsTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>PremaLinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insight</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communications</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to="/s">Contact us</Link>
                <Link to="/s">Support</Link>
            </article>
            
        </div>
        <div className="footer-copyright">
            <small>2023 ALEX &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
