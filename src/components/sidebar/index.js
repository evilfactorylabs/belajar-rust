import React from 'react'
import styled from '@emotion/styled'

import { ExternalLink } from 'react-feather'
import { StaticQuery, graphql } from 'gatsby'

import Tree from './tree'
import config from '../../../config'

import '../styles.css'

const forcedNavOrder = config.sidebar.forcedNavOrder

const Title = styled('h4')`
  color: white;
  padding: 10px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.8rem;
`

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} />
    </li>
  )
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: rgb(116, 76, 188) !important;
    }

    ${props =>
      props.active &&
      `
      color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`

const Sidebar = styled('aside')`
  width: 100%;
  /* background-color: rgb(245, 247, 249); */
  /* border-right: 1px solid #ede7f3; */
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-top: 10px;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  margin-top: -60px;
  padding-right: 0;
  background-color: #3f0e40;
  z-index: 3;

  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    background-color: #372476;
    background: #372476;
    height: auto;
    margin-top: 0;
  }
`

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    margin-bottom: 1rem;
  }
`

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            headerTitle
          }
        }
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ site, allMdx }) => {
      return (
        <Sidebar>
          <div className={'_title'}>
            <Title>{site.siteMetadata.headerTitle}</Title>
          </div>
          <ul className={'sideBarUL'}>
            <Tree edges={allMdx.edges} />
            <Divider />
            {config.sidebar.links.map((link, key) => {
              if (link.link !== '' && link.text !== '') {
                return (
                  <ListItem key={key} to={link.link}>
                    {link.text}
                    <ExternalLink size={14} />
                  </ListItem>
                )
              }
            })}
          </ul>
        </Sidebar>
      )
    }}
  />
)

export default SidebarLayout
