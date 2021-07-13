import React from "react";
import Capture from './Capture.PNG'
import { Banner } from "./banner";
export const Navigate = () => {
    return <>


        <nav class="navbar navbar-expand-xxl navbar-light bg-light fixed-top ">
            <div className="icon"> <img src={Capture} className="logo" /></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-lg-auto" >

                    <li className="t" >
                        <a className="nav-link" href="#Home" ><p className="pt-1 active" style={{ color: 'black' }}>HOME </p></a>
                    </li>
                    <li className="t">
                        <a className="nav-link" href="#Services"><p className="pt-1" style={{ color: 'black' }}>What we do</p></a>
                    </li>


                    <li className="t">

                        <a className="nav-link" href="#About"><p className="pt-1">About Us</p></a>
                    </li>

                    <li className="t">

                        <a className="nav-link" href="#Footer"><p className="pt-1" >Contact Us</p></a>
                    </li>
                    <li className="t">

                        <a className="nav-link" href="gallery.html"><p className="pt-1" >Gallery</p></a>
                    </li>

                </ul>

            </div>
          
        </nav>

        <  Banner />




    </>
}
