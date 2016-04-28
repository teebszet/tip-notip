import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = ({heading}) => (
  <header className={classes.fullwidthbar}>
    <h1>{heading}</h1>
  </header>
)

export default Header
