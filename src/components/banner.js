function banner() {
    return (

        <div>
            <header>
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="#">LOGO</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-lg-auto">
                                <li id="home"className="t active">
                                    <a className="nav-link" href="#"><button className="btn1">HOME</button><span className="sr-only">(current)</span></a>
                                </li>
                                <li  className="t ">
                                    <a className="nav-link" href="#" ><button className="btn">contact Us</button></a>
                                </li>
                               
                                <li className="t">
                                    <a className="nav-link" href="#"><button className="btn">contact Us</button></a>
                                </li>

                            </ul>

                        </div>
                    </nav>
                </div>
            </header>

            <section class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2>Sakhisizwe Community helpers</h2>
                            <p>We visit and clean houses of disabled members.
                            We help old Community members on day-day activities.
                            we Offer food to the poor people.
                            we have a shelter to take in the ones who are homeless</p>
                            <div class="helper"><a href="#" class="btnD1">Donate 
                            </a></div>

                        </div>
                    </div>
                </div>


            </section>
        </div>



    )
}
export default banner