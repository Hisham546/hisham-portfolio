import React from "react";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import './project.css';
import { personalProjects } from "../../constant";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
export function Project() {


    return (

        <div id="projects"
            className="project-section">
            <div>
                <div className="headerTextParent">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold px-4 md:px-0 mt-2 text-center">
                        <strong className="personalProjects">Personal Projects   </strong>
                    </h2>
                    <h2
                     style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}
                        className="text-1xl md:text-2xl px-4 md:px-0 text-center"

                    >
                        I'm also working on personal projects to expand my skill
                    </h2>
                </div>
                <div className="projectCardParent">

                    {personalProjects.map((data) => (
                        <div className="cardHolder">
                           
                            <div className="child1">
                                {data?.images?.map((item) => (
                                    <img alt="" src={item?.url} className="image-size" />
                                ))}

                            </div>






            
                            <div className="projectDetailsParent  ">
                                <div className="child2  ">
                                    <h4 className="text-xl font-bold mt-4">{data.name}</h4>
                                    <p className="descriptionStyle ">{data.description}</p>
                                    {data?.Features?.map((item) => (


                                        <div
                                            className="features"

                                            key={item.name}>
                                            <p className="featureText">{item?.point}</p>

                                        </div>
                                    ))}


                                </div>
                                <div className="child3">
                                    {data?.techLinks?.map((item) => (


                                        <div
                                            className="techStackWrapper"

                                            key={item.name}>
                                            <p className="techStackName">{item?.name}</p>


                                        </div>

                                    ))}

                                </div>
                                <div className="child4">
                                    <a
                                        href={data?.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="github"

                                    >


                                        <h6 className="githubName">Github</h6>

                                    </a>


                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            </div>



        </div>
    )


}