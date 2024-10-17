import React from "react";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import './project.css';
import { personalProjects } from "../../constant";

export function Project() {


    return (

        <div id="projects"
            className="project-section">
            <div>

                <h2
                    className="text-5xl font-bold px-4 md:px-0 text-center"
                // style={{ fontSize: "3.1em", color: '#3a86eb' }}

                >
                    My Projects
                </h2>

                <div className="projectCardParent">

                    {personalProjects.map((data) => (
                        <Card
                            className="projectCard"
                            key={data.name}
                        // className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                        >
                            <div className="child1">
                                {data?.images?.map((item) => (
                                    <img alt="" src={item?.url} className="image-size" />
                                ))}

                            </div>
                            <div className="child2">
                                <h4 className="text-xl font-bold mt-4">{data.name}</h4>
                                <p className="text-x2 text-justify text-gray-500 mt-4 p-5">{data.description}</p>
                            </div>
                            <div className="child3">
                                {data?.techLinks?.map((item) => (


                                    <div key={item.name}>
                                        <img alt="" src={item?.url} className="icon-size" />


                                    </div>

                                ))}

                            </div>
                            <div className="child4">
                            <h4 className="text-xl font-bold mt-4">github</h4>
                            </div>



                        </Card>
                    ))}
                </div>
            </div>



        </div>
    )


}