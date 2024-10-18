import React from "react";
import './styles.css'
import {
    AiFillGithub,

    AiFillLinkedin,
    AiOutlineReddit, AiFillAndroid, AiFillApple
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
            <div className="c2">
                <h4 className="contact">Contact</h4>
                <div className="socialParent">

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
    )


}