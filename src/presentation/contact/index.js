import React from "react";
import './styles.css'
import {
    AiFillGithub,

    AiFillLinkedin,
    AiOutlineReddit, AiFillAndroid, AiFillApple, AiFillEnvironment, AiFillMail
} from "react-icons/ai";
export function Contact() {


    return (

        <div id="contact"
            className="contact-section">

            <div className="c1">
                <div className="nameParent">
                    <h4 className="contact">Muhammed Hisham </h4>
                    <h4 className="mobileappDeveloper">Mobile App Developer</h4>
                    <div className="platformIconParent">
                        <AiFillAndroid
                            className="contact-Icon" />
                        <AiFillApple
                            className="contact-Icon" />
                    </div>

                </div>

            </div>
            <div className="c3">
                <div className="nameParent">
                    <h4 className="contact">Home Town </h4>
                    <div className="flex items-center space-x-2 mt-2">
                        <AiFillEnvironment className="contact-Icon text-2xl" />
                        <h4 className="location"> Ernakulam, Kerala, India</h4>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                        <AiFillMail className="contact-Icon text-2xl" />
                        <h4 className="location">hmuhammed546@gmail.com</h4>
                    </div>
                </div>

            </div>
            <div className="c2">

                <div className="socialParent">
                    <h4 className="contact">Connect with me</h4>
                    <div className="socialIconParent">
                        <a
                            href={"https://github.com/Hisham546"}
                            target="_blank"
                            rel="noreferrer"

                        >
                            <AiFillGithub
                                className="contact-Icon" />
                        </a>
                        <a
                            href={"https://www.linkedin.com/in/muhammed-hisham-m-i-56a564225/"}
                            target="_blank"
                            rel="noreferrer"

                        >
                            <AiFillLinkedin
                                className="contact-Icon" />
                        </a>
                        <a
                            href={"https://www.reddit.com/user/Unhappy_Jackfruit378/"}
                            target="_blank"
                            rel="noreferrer"

                        >
                            <AiOutlineReddit
                                className="contact-Icon" />
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )


}