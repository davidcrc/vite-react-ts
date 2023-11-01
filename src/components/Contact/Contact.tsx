import img from "@/assets/img/contact.jpg";
import { Button } from "..";
import styles from "./contact.module.scss";

const Contact = () => {
  const backgroundColor = `bg-brightColor`;
  return (
    <div className={styles.container}>
      <div className={styles.container__main}>
        <form className={styles.container__main__form}>
          <h1 className="text-4xl font-semibold text-center">Contact Form</h1>
          <div className=" flex flex-col">
            <label htmlFor="userName">Full Name</label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userMessage">Message</label>
            <textarea
              name="userMessage"
              id="userMessage"
              cols={30}
              rows={3}
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Submit" backgroundColor={backgroundColor} />
          </div>
        </form>
        <div className={styles.container__main__message}>
          <img className=" rounded-lg" src={img} alt="" />
          <p className=" text-center text-sm pt-4 text-[#898888]">
            We'd love to hear from you! Whether you have questions, feedback, or
            need assistance with your travel plans, please don't hesitate to
            reach out. Our team is here to assist you every step of the way.
            Simply fill out the form below, and we'll be in touch shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
