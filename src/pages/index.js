import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Projects from "../data/projects.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h2 style={{fontWeight: 'normal', textAlign: 'center', marginBottom: '4rem'}}>I have visualised&hellip;</h2>
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',alignContent:'flex-start'}}>{
      Projects.projects.map((p,i) => {
        let text;
        if (i < Projects.projects.length - 1) {
          text = `${p.text},`
        } else {
          text = `and ${p.text}.`
        }
        return (
          <div key={i} style={{textAlign:'center', marginTop: '2rem'}}>
            <a href={p.url} style={{display:'block', textDecoration: 'none', color:'inherit', textAlign:'center', fontWeight:'normal'}}>{text}</a>
            {Array.isArray(p.img) ? (
              p.img.map((img) => {
                return (
                  <img key={img.img} src={`project-images/${img.img}`} style={{display: 'block', width:img.width,margin:'30px 0 70px',boxSizing:'border-box'}}></img>
                )})
              ) : (
                <img src={`project-images/${p.img}`} style={{width:p.width,margin:'30px 0 70px',boxSizing:'border-box'}}></img>
              )}

          </div>
        )}
      )}
    </div>
   </Layout>
)

export default IndexPage
