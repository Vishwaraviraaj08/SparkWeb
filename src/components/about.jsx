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
                                <b>{'CAMWARE TECHNOLOGIES '}</b>{props.data ? props.data.paragraph : "loading..."}</p>


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
                                                    <path fill-rule="evenodd"
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
                        CAMWARE TECHNOLOGIES is an End-to-End Solution provider for “Concept to Product” in Embedded Design and Electronics Manufacturing Services (EMS), Electronics System Design and Manufacturing Services (ESDM) under single roof. Camware is determined to focus on the complete spectrum of state of the art and emerging technologies in EMS to bring a positive change in the arena of Electronics Manufacturing Industries.
                    </p>

                    <p className="text-justify">
                        Camware brings the world class quality at competitive price. We undertake prototype to high
                        volume production in the entire gamut of turnkey EMS solutions. Camware undertakes conceptual
                        design, manufacture and testing of high quality and reliable PCBAs, Box Build, Products and
                        Systems Integration Services. Our solutions drive innovations and in turn cost effectiveness in
                        the processes of manufacturing, supply chain, information exchanges / dissemination, etc.
                        Camware offers Design, Prototype Development, Batch Production, Final Assembly, Testing, Burn-in
                        and Pack out. We have state-of-the-art Infrastructure and Modern Day Technological Aids.
                    </p>
                    <p className="text-justify">
                        We are focusing different segments like Defense & Aerospace, power, Telecom, IT, Transportation,
                        Medical & Healthcare, Automotive, Industrial, Railway, Services, etc.We have committed and
                        dedicated Manpower to serve the clients in line with our company policy of “Quality on Time”.
                    </p>
                    <p className="text-justify">
                        Camware strengths in Design, Manufacturing, Infrastructures, Systems, Skill Sets and TQM
                        practices enable it to offer High tech, High Mix, Low and Medium Volume Production along with
                        Value Engineering and Product Data Management for New Product initiative (NPI) and New Product
                        Development (NPD).Camware is supporting as Original Design Manufacturing (ODM) Company which is
                        designed with two leading design house for HARDWARE & MECHANICAL design oriented products as
                        specified by its customers. Such companies allow the brand firm to produce products (either as a
                        supplement OR solely) without having to engage in the organization OR running of a
                        factory.Camware also has a separate team to cater IT Infrastructure Management Services (IMS)
                        needs of clients. The team has the expertise in the entire gamut of IMS services.
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
