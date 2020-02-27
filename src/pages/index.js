import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Projects from "../data/projects.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{fontWeight: 'normal', textAlign: 'center', maxWidth: '40rem', margin: 'auto auto 8rem'}}>Hi, I'm Ri. <br /> I make data visualisations and interactive stories.</h1>
    <h2 style={{fontWeight: 'normal', textAlign: 'center', marginBottom: '4rem'}}>I have visualised...</h2>
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',alignContent:'flex-start'}}>{ Projects.projects.map((p) => {
      return (
        <div style={{textAlign:'center', marginTop: '2em'}}>
          <a href={p.url} style={{display:'block', textDecoration: 'none', color:'inherit', textAlign:'center', fontWeight:'normal'}}>{p.text},</a>
          <img src={`/project-images/${p.img}`} style={{width:p.width,margin:'30px 0 70px',boxSizing:'border-box'}}></img>
        </div>
      )
    }) }</div>
    <h2 style={{fontWeight: 'normal'}}>Get in touch!</h2>
    <p>e: <a style={{color: 'inherit'}} href="mailto:me@ri.id.au">me@ri.id.au</a></p>
    <p>t: <a style={{color: 'inherit'}} href="http://twitter.com/riblah">@riblah</a></p>
  </Layout>
)

export default IndexPage
