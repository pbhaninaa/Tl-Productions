function Contacts(){
    return(
        <section className="contact py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="head">
                                            <h3 className="head text-center text-white py-3">Contact Us</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col-lg-5">
                                        <div className="row px-3">
                                            <div className="col-lg-2">
                                                <i class="fas fa-phone-volume"></i>
                                            </div>
                                            <div className="col-lg-10">
                                                <h6 className="font-weight-bold pt-2">Give us a ring</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="offset-1 col-lg-5">
                                        <div className="row px-3">
                                            <div className="col-lg-2">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="col-lg-10">
                                                <h6 className="font-weight-bold pt-2">Find us at the office</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="offset-1 col-lg-4">
                                            <p>Sinovuyo Sikhisi<br/>
                                            +27 78 228 3930<br/>
                                            Mon - Fri, 8:00-22:00
                                            </p>
                                        </div>
                                        <div className="offset-2 col-lg-5 pl-4">
                                            <p>

                                            </p>
                                        </div>
                                    </div>

                                    <div className="form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" class="effect-1" placeholder="Full Name"></input>
                                                <span class="focus-border"></span>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" class="effect-1" placeholder="Your Email"></input>
                                                <span class="focus-border"></span>
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
export default Contacts