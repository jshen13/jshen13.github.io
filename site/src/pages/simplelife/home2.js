import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import SEO from "../../components/seo"
import Header from "../../components/header"
import headerStyles from "../../components/header.module.css"

import homeStyles from "./../index.module.css"
import SimpleLifeScents from "../../images/SimpleLife/scents.png"
import SimpleLifeBathroomBundle from "../../images/SimpleLife/bathroom_bundle.png"
import DroneVideo from "../../images/SimpleLife/Demo.mp4"

import { FiChevronRight } from "react-icons/fi"


const IndexPage = ({ data }) => (
 
  <div className={homeStyles.mainHome}>
    <header className={headerStyles.siteHeader}>
<nav className={headerStyles.navBar} id="myTopnav" >
<ul>
<li  ><Link  to="/simplelife/products">Products</Link>
  {/* <a href="art.html">Art Portfolio</a> */}
</li>
<li><Link  to="/simplelife/story">Our Story</Link>
  {/* <a href="art.html">Art Portfolio</a> */}
</li>
<li><Link  to="/simplelife/blog">Blog</Link>
  {/* <a href="notes.html">Notes</a> */}
</li>
<li><Link  to="/simplelife/home2">Home</Link>
  {/* <a className="active" href="index.html">Home</a> */}
        </li>
        
  

        
</ul>

</nav>


</header>

    <SEO title="Home" />

    <div className={homeStyles.mainVideo}>
      <video autoPlay loop muted>
        <source src={DroneVideo} type="video/mp4" />
        </video>
      <div className={homeStyles.videoCenter}>
        {/* <div className={homeStyles.title}>
          Welcome 
        </div> */}

        
        
      </div>
      <div className={homeStyles.aboutButton}>
        <Link to="/simplelife/buy"><button className={homeStyles.btn}>
          <div className={homeStyles.borderAnimation}>
            <svg width="140px" height="50px" viewBox="0 0 140 50" class="border">
            <polyline points="139,1 139,49 1,49 1,1 139,1" class="bg-line" />
            <polyline points="139,1 139,49 1,49 1,1 139,1" class="hl-line" />
              </svg>
          </div>
          
            <span>Buy <FiChevronRight style={{ transform: "translate(+0%, +15%)" }} /> </span>
          </button></Link>  
        </div>
    </div>
    <img src={SimpleLifeScents} alt="Simple Life Home" width="100%" />
        <img src={SimpleLifeBathroomBundle} alt="Simple Life Home" width="100%" />
                


    <br></br>



  </div>
  
)

export default IndexPage

export const query = graphql`
query {
    site {
        siteMetadata {
            title
            info
        }
    }
}
`