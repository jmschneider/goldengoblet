import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { Helmet } from "react-helmet"

import favicon from "../images/favicon.ico"
import { SpoilerProvider } from "../context/SpoilerContext"

const Layout = ({
  backgroundColor,
  currentGame,
  navButtons,
  variant,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allGamesCsv(sort: { order: DESC, fields: week }) {
        nodes {
          week
          slug
          name
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playball&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        <style type="text/css">{`
          body {
            background-color: ${backgroundColor};
          }
      `}</style>
      </Helmet>
      <SpoilerProvider>
        <Navbar variant={variant} expand="lg">
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mr-auto">
              <NavDropdown title={currentGame || "Games"} id="weeksDropdown">
                {data.allGamesCsv.nodes.map(({ name, slug, week }) => (
                  <NavDropdown.Item as={Link} to={`/${slug}`} key={week}>
                    {name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/medals"
                id="medalsLink"
                activeClassName="active"
              >
                Medals
              </Nav.Link>
            </Nav>
            <Nav>{navButtons}</Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>{children}</Container>
      </SpoilerProvider>
    </>
  )
}

Layout.defaultProps = {
  backgroundColor: "#202020",
  currentGame: null,
  navButtons: null,
  variant: "dark",
}

export default Layout
