import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"
import React from "react"
import logo from "../images/logos/logo2.png"

export default function Header({ data, siteTitle }) {
  function isActiveTab(name) {
    if (name == siteTitle) {
      return (
        headerStyles.activeTab
      )
    } else {
      return ""
    }
}
  // const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>

  console.log(headerStyles);
  
  return (
<header className={headerStyles.siteHeader}>
<meta property="og:image" content="https://jshen13.github.io/logo.png" />
<nav className={ headerStyles.navBar} id="myTopnav" >
<ul>
<li  ><Link className={isActiveTab("About")} to="/about/">About</Link>
  {/* <a href="art.html">Art Portfolio</a> */}
</li>
<li><Link className={isActiveTab("Hobbies")} to="/hobbies/">Hobbies</Link>
  {/* <a href="art.html">Art Portfolio</a> */}
</li>
<li><Link className={isActiveTab("Notes")} to="/notes/">Notes</Link>
  {/* <a href="notes.html">Notes</a> */}
</li>
<li><Link className={isActiveTab("Home")} to="/">Home</Link>
  {/* <a className="active" href="index.html">Home</a> */}
        </li>
        
<h1 style={{ margin: 0, padding: 0 }}>
          <Link to="/" style={{ color: `white`, textDecoration: `none` }}>
            <img src={logo} width="25px" height="25px" alt="logo"/> {siteTitle} </Link>
      </h1>
  

        
</ul>

</nav>


</header>

    )
  
  
  
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

