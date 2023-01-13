import React from 'react';
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import Resume from "../../assets/Resume.pdf"
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="about-img" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        I am Saransh Chaurasia, web developer from Uttar Pradesh, India. I have rich experience in website
                        design, building and customization, also I am good at UI/UX Designing and Web API Integration.
                        </p>
                        <a href={Resume} className="btn" target="_blank" rel="noopener noreferrer" download="Resume.pdf">View Resume</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">85%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Data Structures</h3>
                                <span className="skills__number">75%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage dsa"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Graphic Design</h3>
                                <span className="skills__number">65%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage graphic__design"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <AboutBox />
        </section>
    )
}

export default About
