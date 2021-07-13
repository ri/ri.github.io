import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Projects from "../data/projects.json"

const MaybeA = ({href, children, ...props}) => {
  if (!href) { return children }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}


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
            <MaybeA href={p.url} style={{color:'inherit', textDecoration: 'none'}}>
              <p style={{display:'block', textAlign:'center', fontWeight:'normal', margin: 0}}>{text}</p>
              {Array.isArray(p.img) ? (
                p.img.map((img) => {
                  return (
                    <img alt={img.name} key={img.img} src={`project-images/${img.img}`} style={{display: 'block', width:img.width,margin:'30px 0 70px',boxSizing:'border-box'}}></img>
                  )})
                ) : (
                  <img alt={p.name} src={`project-images/${p.img}`} style={{width:p.width,margin:'30px 0 70px',boxSizing:'border-box'}}></img>
                )}
            </MaybeA>
          </div>
        )}
      )}
    </div>
   </Layout>
)

export default IndexPage
