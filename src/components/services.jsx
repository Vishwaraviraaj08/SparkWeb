import React from "react";

export const Services = (props) => {

    //


    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                        dapibus leonec.
                    </p>
                </div>
                <>
                    {/* Carousel container */}
                    <div
                        id="my-pics"
                        data-interval="1000"
                        className="carousel slide"
                        data-ride="carousel"
                        style={{ width: 380, margin: "auto" }}
                    >
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-target="#my-pics" data-slide-to={0} className="active" />
                            <li data-target="#my-pics" data-slide-to={1} />
                            <li data-target="#my-pics" data-slide-to={2} />
                        </ol>
                        {/* Content */}
                        <div className="carousel-inner" role="listbox">
                            {/* Slide 1 */}
                            <div className="item active">
                                <img src="https://ceciliasluxelife.com/wp-content/uploads/2019/05/Nice-city-view.jpg" alt="Sunset over beach" />
                            </div>
                            {/* Slide 2 */}
                            <div className="item">
                                <img src="https://ceciliasluxelife.com/wp-content/uploads/2019/05/Nice-city-view.jpg" alt="Rob Roy Glacier" />
                            </div>
                            {/* Slide 3 */}
                            <div className="item">
                                <img src="https://ceciliasluxelife.com/wp-content/uploads/2019/05/Nice-city-view.jpg" alt="Longtail boats at Phi Phi" />
                            </div>
                        </div>
                        {/* Previous/Next controls */}
                        <a
                            className="left carousel-control"
                            href="#my-pics"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="icon-prev" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="right carousel-control"
                            href="#my-pics"
                            role="button"
                            data-slide="next"
                        >
                            <span className="icon-next" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </>


                <br/>
                <div className="row">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-4">
                                {" "}
                                <i className={d.icon}></i>
                                <div className="service-desc">
                                    <h3>{d.name}</h3>
                                    <p style={{textAlign:"center", fontSize:"130%"}}>{d.text}</p>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </div>
);
};
