import React from "react"
import { graphql } from 'gatsby'

import SEO from "../../components/seo"





const IndexPage = ({ data }) => (
    <div className="home">
        <SEO title="Simple Life Buy" description="Fresh Disinfecting Bathroom Toilet Bowl Cleaning Stamp Gel | Amazon, Clorox" />
        <h1>Buy page</h1> 
        <a href="https://www.amazon.com/Simple-Life-Limescales-Freshening-Deodorizing/dp/B08XMBKCJD">Amazon Link</a>
    {/* <img src={SimpleLifeHome} alt="Simple Life Home" width="100%" />
    <img src={SimpleLifeWorks} alt="Simple Life Home" width="100%" />
    <img src={SimpleLifeScents} alt="Simple Life Home" width="100%" />
        <img src={SimpleLifeBathroomBundle} alt="Simple Life Home" width="100%" />
         */}
         


        {/* <Link to="/products"><button className={simpleLifeStyles.products_btn}>
    Products            </button></Link>

    <button className={simpleLifeStyles.our_story_btn}>
            Our Story            </button>
        
            <button className={simpleLifeStyles.blog_btn}>
            Blog            </button> */}
    </div >
)
        

//   <div className={homeStyles.mainHome}>
//     <Header siteTitle="Simple Life"/>

//         <SEO title="Simple Life Products" />
        

//     <div className={homeStyles.mainVideo}>
//       <video autoPlay loop muted>
//         <source src={DroneVideo} type="video/mp4" />
//         <img id="alternative" src={DroneVideoAlt} />
//         </video>
//       <div className={homeStyles.videoCenter}>
//         <div className={homeStyles.title}>
//           Hi! I'm Jeffrey
//         </div>

        
        
//       </div>
//       <div className={homeStyles.aboutButton}>
//         <Link to="/about"><button className={homeStyles.btn}>
//           <div className={homeStyles.borderAnimation}>
//             <svg width="140px" height="50px" viewBox="0 0 140 50" class="border">
//             <polyline points="139,1 139,49 1,49 1,1 139,1" class="bg-line" />
//             <polyline points="139,1 139,49 1,49 1,1 139,1" class="hl-line" />
//               </svg>
//           </div>
          
//             <span>About me <FiChevronRight style={{ transform: "translate(+0%, +15%)" }} /> </span>
//           </button></Link>  
//         </div>
//     </div>
    
//     <div className={homeStyles.rest}>
//       <Intro image={PersonalPic} title="Hello!" desc={data.site.siteMetadata.info + " I've completed a couple software engineering internships at various companies. I also enjoy golfing, flying drones, and drawing."}  buttons={[
//                     {
//                         name: <React.Fragment>LinkedIn <FaLinkedin style={{ transform: "translateY(+14%)" }}/></React.Fragment>,
//                         link: "https://linkedin.com/in/jshen13"
//                     },
//                     {
//                         name: <React.Fragment>Github <FaGithub style={{ transform: "translateY(+14%)" }}/></React.Fragment>,
//                         link: "https://github.com/jshen13",
//                     }
//       ]} />
      
//       <div className={homeStyles.pictures}>
//         <div className={homeStyles.gallery3}>
//           <img src={BoatPier}></img>
//         </div>

//         <div className={homeStyles.gallery3}>
//           <img src={DronePic}></img>
//         </div>

//         <div className={homeStyles.gallery3}>
//           <img src={DronePVPic}></img>
//         </div>

//       </div>

        
      
//     </div>
                


//     <footer style={{
//             marginTop: `2rem`,
//             textAlign: `center`
//         }}>
//           Jeffrey Shen © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
          
//           {` `}
//           (<a href="https://github.com/jshen13/jshen13.github.io" target="_blank" rel="noreferrer">Github Repo</a>)
//     </footer>
//     <br></br>



//   </div>
  


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