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
                        className="text-1xl md:text-2xl px-4 md:px-0 text-center"

                    >
                        I'm also working personal projects to expand my skill
                    </h2>
                </div>
                <div className="projectCardParent">

                    {personalProjects.map((data) => (
                        <div className="cardHolder">
                            {/* <Card
                                className="projectCard"
                                key={data.name}
                            // className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                            > */}
                            <div className="child1">
                                {data?.images?.map((item) => (
                                    <img alt="" src={item?.url} className="image-size" />
                                ))}

                            </div>






                            {/* </Card> */}
                            <div className="projectDetailsParent  ">
                                <div className="child2  ">
                                    <h4 className="text-xl font-bold mt-4">{data.name}</h4>
                                    <p className="descriptionStyle ">{data.description}</p>
                                    {data?.Features?.map((item) => (


                                        <div
                                            className="features"
                                            // className="py-2 px-4 bg-gray-50 md:m-4 mx-2 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-20"
                                            key={item.name}>
                                            <p className="featureText">{item?.point}</p>
                                            {/* <img alt="" src={item?.url} className="icon-size" /> */}

                                        </div>
                                    ))}


                                </div>
                                <div className="child3">
                                    {data?.techLinks?.map((item) => (


                                        <div
                                            className="techStackWrapper"
                                            // className="py-2 px-4 bg-gray-50 md:m-4 mx-2 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-20"
                                            key={item.name}>
                                            <p className="techStackName">{item?.name}</p>
                                            {/* <img alt="" src={item?.url} className="icon-size" /> */}

                                        </div>

                                    ))}

                                </div>
                                <div className="child4">
                                    <a
                                        href={data?.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex flex-col items-center py-2 px-2 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"

                                    >


                                        <AiFillGithub
                                            className="project-Icon text-3xl" />

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