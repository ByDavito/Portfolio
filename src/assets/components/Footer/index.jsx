import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={`fixed bottom-0 w-full ${styles.footer}`}>
        <ul className={styles.ul_footer}>
            <li className={styles.li}><a href=""><FaInstagram /></a></li>
            <li className={styles.li}><a href="https://www.facebook.com/david.racca.184/"><FaSquareFacebook /></a></li>
            <li className={styles.li}><a href="https://www.linkedin.com/in/david-ariel-racca-9559b52a9/"><FaLinkedin /></a></li>
            <li className={styles.li}><a href=""><FaWhatsapp /></a></li>
        </ul>
    </footer>
  )
}

export default Footer