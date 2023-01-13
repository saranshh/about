import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">15+</h3>
                    <span className="about__subtitle">Project Completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-graduation"></i>

                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Degrees[B.Tech & BSc]</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>

                <div>
                    <h3 className="about__title">3+</h3>
                    <span className="about__subtitle">Volunteer</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>

                <div>
                    <h3 className="about__title">100+</h3>
                    <span className="about__subtitle">Code Challenges</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox
