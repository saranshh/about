import React from 'react';
import "./Services.css";
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3-new.png"

const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX Design",
      description:
        "Experienced in organizing content within an app or website to guide the user to accomplish tasks or educate them about the product.",
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      description:
        "Experience in building responsive, elegant web applications with React, Node, Javascript and MongoDB technologies.",
    },
    {
      id: 3,
      image: Image3,
      title: "Graphic Design",
      description:
        "Experienced in designing logos, website mirroring, sample layout based on knowledge of layout and ethestic design concepts.",
    },
  ];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="images" className="services__img" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
