import React from "react";
import Services from "./services";
import About from "./About";
import Footer from "../footer";

import "./styler.css"
export const Banner = () => {
    return <>
        <div className="container-Xlg" id="Home">
            <section class="banner" >
                <div>
                    <h3 class=" display-5  font-weight-bold" style={{ color: '#CFCCC2' }}><b>Serve Your gift to the World</b></h3>
                    <p class="lead font-weight-bold">To support & improve the lives of women through income generation Activities</p>
                    <div class="helper"><a href="programs.js" class="btnD1">Donate
                    </a></div>
                </div>
            </section>
            <About />
            < Services />
           
            < Footer />
        </div>
    </>
}
