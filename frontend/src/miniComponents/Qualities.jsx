import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Our focus is on uplifting communities through strategic initiatives that promote growth, education, and well-being. We believe in empowering individuals to create lasting change in their neighborhoods.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "We are committed to maintaining the highest standards of transparency. Every donation is tracked, and we provide detailed reports on how funds are used, ensuring your contributions make a real impact.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "Measuring the impact of our projects is crucial. We use robust metrics and data analysis to evaluate the effectiveness of our initiatives, ensuring that every effort leads to meaningful results.",
    },
  ];

  return (
    <>
      <section className="qualities">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">OUR QUALITIES</h2>
            <p>
              At Generosity, we pride ourselves on core qualities that define our approach to making a positive impact. Our dedication to community, transparency, and measurable outcomes sets us apart.
            </p>
          </div>
          <div className="qualities_container">
            {qualities.map((element) => (
              <div className="card" key={element.id}>
                <div className="img-wrapper">
                  <img src={element.image} alt={element.title} />
                </div>
                <div className="content">
                  <h3 className="title">{element.title}</h3>
                  <p className="description">{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualities;
