import React from 'react'
import { Link } from 'gatsby'
import footerStyles from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <ul className={footerStyles.socialLinksWrapper}>
        <li>
          <a className={footerStyles.socialLink} href="https://twitter.com/10ursabanoglu" target="_blank">twitter</a>
        </li>
        <li>
          <a className={footerStyles.socialLink} href="https://instagram.com/10ursabanoglu" target="_blank">instagram</a>
        </li>
        <li>
          <a className={footerStyles.socialLink} href="https://dribbble.com/10ursabanoglu" target="_blank">dribbble</a>
        </li>
        <li>
          <a className={footerStyles.socialLink} href="https://www.behance.net/10ursabanoglu" target="_blank">behance</a>
        </li>
        <li>
          <a className={footerStyles.socialLink} href="https://codepen.io/Onursabanoglu" target="_blank">codepen</a>
        </li>
        <li>
          <a className={footerStyles.socialLink} href="https://github.com/10ursabanoglu" target="_blank">github</a>
        </li>
        <li>
          <a className={footerStyles.socialLink} href="https://medium.com/@10ursabanoglu" target="_blank">medium</a>
        </li>
        <li>
          <a className={footerStyles.socialLink} href="https://www.linkedin.com/in/onur-%C5%9Fabano%C4%9Flu-816b49144/" target="_blank">linkedin</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer