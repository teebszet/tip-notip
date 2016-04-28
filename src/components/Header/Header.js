import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = ({heading}) => (
  <div>
    <h1>{heading}</h1>
  </div>
)

export default Header
