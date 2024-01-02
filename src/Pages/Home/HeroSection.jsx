import { Link as ScrollLink } from 'react-scroll';
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Yussel</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          A Full Stack focused Developer building the Frontend and backend of Web and Mobile Applications 
            <br /> that leads to the success of the overall product
            <br />
          </p>
        </div>
        <ScrollLink
               to="MyPortfolio"  
               spy={true}
               smooth={true}
               duration={500}
               className="btn btn-primary"
>
         Projects
         </ScrollLink>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
