import React, { Component } from 'react';
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import artStyles from "./art.module.css"
import { FiDownload } from 'react-icons/fi';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

import sf_road from "../images/art/sf_road.jpg"
import bell from "../images/art/bell.jpg"
import colorBoat from "../images/art/color_boat.jpg" 
import boatPier from "../images/art/boat_pier.jpg" 
import Tank from "../images/art/tank.jpg"
import Seaside from "../images/art/seaside.jpg"
import Car from "../images/art/car.jpg"
import Vase from "../images/art/vase.jpg"
import Gear from "../images/art/gear.jpg"
import Face from "../images/art/face.jpg"
import ThermalSeal from "../images/art/object.jpg" 
import Head from "../images/art/head.jpg" 

export default function Art() {
    // function showDesc(x) {
    //     var popup = document.getElementById(x);
    //     popup.classList.toggle("show");
    // }
      
    
    // function hideDesc(x) {
    //     var popup = document.getElementById(x);
    //     popup.classList.toggle("show");
    // }

    return (
        <React.Fragment>
        <Header siteTitle="Art Gallery"/>
            <SEO title="Art Gallery"></SEO>
            <div className={artStyles.classComponent}>
            <div className={artStyles.gallery}>
        <div className={artStyles.artRow}>
            <div className={artStyles.art3}>
                
                            <img src={sf_road} />
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="sfPP">SF Street, Pastel, 10/11/17</span>
                </div>
            </div>
            <div className={artStyles.art3}>
                        <img src={bell}/>
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="bellPP">Bell, Pastel</span>
                </div>
            </div>
            <div className={artStyles.art3}>
                        <img src={colorBoat}/>
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="cbPP">Riverboats, Pastel, 1/14/17</span>
                </div>
            </div>

            
        </div>

        <div className={artStyles.artRow}>
            <div className={artStyles.art2}>
                        <img onmouseover="showDesc('boatPP')" onmouseout="hideDesc('boatPP')" src={boatPier} />
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="boatPP">Boat by the Pier, Pastel, 7/20/18</span>
                </div>
            </div>
            <div className={artStyles.art2}>
                        <img onmouseover="showDesc('tankPP')" onmouseout="hideDesc('tankPP')" src={Tank} />
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="tankPP">Tank, Sketch, 11/25/14</span>
                </div>
            </div>
        </div>

        <div className={artStyles.artRow}>
            <div className={artStyles.art2}>
                <img onmouseover="showDesc('seasidePP')" onmouseout="hideDesc('seasidePP')" src={Seaside}/>
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="seasidePP">Rocky Coastline, Pastel</span>
                </div>
            </div>
            <div className={artStyles.art2}>
                        <img onmouseover="showDesc('carPP')" onmouseout="hideDesc('carPP')" src={Car}/>
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="carPP">Historic Racecar, Sketch, 6/17/15</span>
                </div>
            </div>

        </div>

        <div className={artStyles.artRow}>
            <div className={artStyles.art2}>
                        <img onmouseover="showDesc('vasePP')" onmouseout="hideDesc('vasePP')" src={Vase} />
                <div className={artStyles.popup}>
                    <span className={artStyles.popuptext} id="vasePP">Fruits and Vases, Pastel, 8/13/16</span>
                </div>
            </div>
            <div className={artStyles.art2}>
                        <img onmouseover="showDesc('gearPP')" onmouseout="hideDesc('gearPP')" src={Gear} />
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="gearPP">Gear, Sketch, 10/22/15</span>
                </div>
            </div>
        </div>

        <div className={artStyles.artRow}>
            <div className={artStyles.art3}>
                        <img onmouseover="showDesc('facePP')" onmouseout="hideDesc('facePP')" src={Face} />
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="facePP">Face, Sketch</span>
                </div>
            </div>

            <div className={artStyles.art3}>
                        <img onmouseover="showDesc('objectPP')" onmouseout="hideDesc('objectPP')" src={ThermalSeal} />
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="objectPP">Thermal Seal, Sketch, 3/25/15</span>
                </div>
            </div>

            <div className={artStyles.art3}>
                        <img onmouseover="showDesc('headPP')" onmouseout="hideDesc('headPP')" src={ Head }/>
                <div className={artStyles.popup} >
                    <span className={artStyles.popuptext} id="headPP">Head Figure, Sketch, 8/30/17</span>
                </div>
            </div>
                </div>
                </div>
      </div>
      </React.Fragment>
        
    )
  
      
  }