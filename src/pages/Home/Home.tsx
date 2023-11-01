import { Button } from "@/components";
import img from "@/assets/img/hero.jpg";
import { Link } from "react-scroll";
import styles from "./home.module.scss";

const Home = () => {
  const backgroundColor = `bg-brightColor`;

  return (
    <div className={styles.container}>
      <div className=" flex flex-col text-center lg:text-start gap-5">
        <h1 className=" font-semibold text-5xl leading-tight">
          Discover the Best Destinations
        </h1>
        <p>
          With TripExample you can experience new travel and the best tourist
          destinations that we have to offer
        </p>

        <div className=" lg:pl-24">
          <Link to="destination" spy={true} smooth={true} duration={500}>
            <Button title="Destinations" backgroundColor={backgroundColor} />
          </Link>
        </div>
      </div>
      <div className=" mt-14 lg:mt-0 w-full lg:w-4/5">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
