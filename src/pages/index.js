import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal`, fontFamily: `Avenir, sans-serif` }}>
    <Link to="/about">About</Link>
    <Header headerText="Work in Progess" />
    <p>work in progress will happen here.</p>
  </div>
)
