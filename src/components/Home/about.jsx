import React from "react";

export const About = (props) => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src="https://www.geolocstar.com/wp-content/uploads/2021/02/hardware-integration-hero-image@2x-scaled.jpg" className="img-responsive" alt=""/>{" "}
                    </div>
                    <div className="col-xs-12 col-md-5">
                        <div className="about-text">
                            <h2>About Us</h2>
                            <p className="text-justify">
                                <b>{'CAMWARE ELECTRONICS '}</b>{props.data ? props.data.paragraph : "loading..."}</p>


                            <br/>

                        </div>

                    </div>

                </div>
                <div style={{padding: '0 20 20'}} className={"row"}>
                    <br/>
                    <div className={"col-12"}>
                        <h3 style={{paddingLeft: '20px', paddingTop: '30px'}}>{'Domains'}</h3>
                        <div className="list-style">
                            <div className="col-12 ">
                                <ul>
                                    {props.data ? props.data.domains.map((d, i) => (<div className={"flex d-inline "}>

                                            <li className={"h5"} key={`${d}-${i}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd"
                                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                                </svg>
                                                &nbsp;&nbsp;&nbsp;{d}</li>
                                        </div>)) :
                                        "loading"}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className={""}>{' '}</p>

                    <p className="text-justify">
                        Our team at Camware Electronics is driven by a passion for innovation and a dedication to excellence. We specialize in the research and development of products within the embedded systems domain, leveraging our expertise to design and deliver solutions that meet the evolving demands of various industries.
                    </p>
                    <p className="text-justify">
                        At Camware Electronics, we understand the importance of staying ahead in today's fast-paced technological landscape. That's why we invest heavily in research and development, continuously exploring new technologies and methodologies to ensure that our products are at the forefront of innovation.
                    </p>

                    <p className="text-justify">
                        Whether it's creating advanced industrial automation systems, developing smart devices for the consumer market, or designing bespoke solutions tailored to specific industry needs, Camware Electronics is committed to delivering excellence in every project we undertake.
                    </p>

                    <p className="text-justify">
                        Explore our website to learn more about our company, our values, and the exciting projects we're working on. Join us on this journey as we strive to redefine the possibilities of embedded systems technology and make a meaningful impact on the world around us.
                    </p>
                        
                        
                </div>
            </div>
            <div>
                <div id="faq" role="tablist" aria-multiselectable="true" style={{width:'70%', margin:'0 auto'}}>

                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="questionOne">
                            <h5 className="panel-title">
                                <a data-toggle="collapse" data-parent="#faq" href="#answerOne" aria-expanded="false" aria-controls="answerOne">
                                    <h2 style={{fontSize:'100%'}}>VISION</h2>
                                </a>
                            </h5>
                        </div>
                        <div id="answerOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="questionOne">
                            <div className="panel-body">
                                <p><b>CAMWARE</b> provide's products and services which are intended to meet Customer’s needs and expectations. All associates partake in making CAMWARE successful by a spirit of hard work, teamwork and dedication to deliver products of which they are justifiably proud</p>
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="questionTwo">
                            <h5 className="panel-title">
                                <a className="collapsed" data-toggle="collapse" data-parent="#faq" href="#answerTwo" aria-expanded="false" aria-controls="answerTwo">
                                    <h2 style={{fontSize:'100%'}}>MISSION</h2>
                                </a>
                            </h5>
                        </div>
                        <div id="answerTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="questionTwo">
                            <div className="panel-body">
                                <b>CAMWARE</b> is committed to this mission and will provide the leadership, resources, and training to support it. Every member of staff is responsible and empowered to implement the Mission Policy.
                                <li style={{margin: '10px auto'}}>Production to Customer Specification .</li>
                                <li style={{margin: '10px auto'}}> Delivery on Time .</li>
                                <li style={{margin: '10px auto'}}> Process Efficiency .</li>
                                <li style={{margin: '10px auto'}}> Continual Improvement .</li>
                                <li style={{margin: '10px auto'}}> Raising levels of Customer Satisfaction.</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>);
            };
