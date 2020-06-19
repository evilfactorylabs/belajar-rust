import React from 'react'
import isAbsoluteUrl from 'is-absolute-url'

import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, ...props }) =>
  isAbsoluteUrl(to) ? (
    <a href={to} {...props} />
  ) : (
    <GatsbyLink to={to} {...props} />
  )

export default Link
