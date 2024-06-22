import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Alexa",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "John",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Michael",
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Robert",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Siri",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Tobey",
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "John Wick",
    },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">Our Members</h2>
            <p>
              Meet the dedicated members of our community who make generosity
              possible. Their commitment and passion drive our mission forward.
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
