import { Button } from "..";
import img from "@/assets/img/about.jpg";

import { Link } from "react-scroll";
import styles from "./about.module.scss";

const About = () => {
  const backgroundColor = `bg-white`;

  return (
    <div className={styles.container}>
      <div className=" w-full lg:w-2/4 space-y-5">
        <h1 className=" font-semibold text-4xl text-white leading-tight">
          At TripExample, we are ready to provide you with the best trip of your
          life!
        </h1>
        <p className=" text-[#bdbdbd] pb-5">
          Your dream vacation awaits, and we're here to make it a reality.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Now" backgroundColor={backgroundColor} />
        </Link>
      </div>
      <div className=" w-full lg:w-2/4">
        <img className=" rounded-2xl" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
