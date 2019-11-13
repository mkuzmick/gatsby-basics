import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal`, fontFamily: `Avenir, sans-serif` }}>
    <Link to="/">Home</Link>
    <Header headerText="About" />
    <p>about will happen here.</p>
  </div>
)
