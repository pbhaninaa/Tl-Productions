import React from "react"
import './style.css'
export const Contact = () => {
    return (
        <section className="contact py-5 mt-5" id="Contact">
            <div className="" >
                <div className="row" >
                    <div className="col-lg-7 mx-auto">
                        <div className="card mw-5" style={{border:"none"}}> 
                            <div className="card-body" >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div>
                                            <h3 className="head text-center text-white py-3">Contact Us</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col-lg-5">
                                        <div className="row px-3">
                                            <div className="col-lg-2">
                                                <i className="fas fa-phone-volume"></i>
                                            </div>
                                            <div className="col-lg-10">
                                                <h6 className="font-weight-bold pt-2">Give us a ring</h6>
                                                <div>
                                                    <p>Sinovuyo Sikhisi<br />
                                                        +27 78 228 3930<br />
                                                        Mon - Fri, 8:00-22:00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-lg-5">
                                        <div className="row px-3">
                                            <div className="col-lg-2">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="col-lg-10">
                                                <h6 className="font-weight-bold pt-2">Find us at the office</h6>
                                                <div>
                                                    <p>18422 forest view strict<br />
                                                        Kutlwanong Club 2000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form p-3">
                                        <div className="row my-1">
                                            <div className="col-lg-6">
                                                <input type="text" className="effect-1" placeholder="Full Name" />
                                                <span className="Focus-border"></span>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" className="effect-1" placeholder="Your Email" />
                                                <span className="Focus-border"></span>
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <div className="col-lg-12">
                                                <input type="text" className="effect-1" placeholder="Your Message" />
                                                <span className="Focus-border"></span>
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            
                                            
                                            <div className="col-lg-4">
                                                <button className="btn6">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


