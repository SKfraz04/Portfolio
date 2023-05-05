import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>My skills in web development, particularly in HTML, CSS, ReactJS, NextJS, Bootstrap, JavaScript, and jQuery. I have experience building responsive and user-friendly websites using these technologies. My proficiency in ReactJS and CSS allows me to create visually appealing designs, while my knowledge of ReactJS and NextJS enables me to build dynamic and high-performance web applications. I also have expertise in using Bootstrap and Telwind for rapid prototyping and jQuery for simplifying complex JavaScript tasks.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src="https://img.icons8.com/?size=512&id=20909&format=png" alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src="https://mdevelopers.com/storage/2_reactheader_97879347.png" alt="Image" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="Image" />
                  <h5>NEXT JS</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/?size=512&id=21278&format=png" alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="Image" />
                  <h5>Telwind CSS</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/?size=512&id=gYCTehfTlYk5&format=png" alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/?size=512&id=9Um0Q4sZ0QCC&format=png" alt="Image" />
                  <h5>JQuery</h5>
                </div>
                <div className="item">
                  <img src="https://img.icons8.com/?size=512&id=84710&format=png" alt="Image" />
                  <h5>BootStrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
