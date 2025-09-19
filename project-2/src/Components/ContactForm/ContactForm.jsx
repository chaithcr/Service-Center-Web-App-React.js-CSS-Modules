import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage, MdAddCall } from "react-icons/md";
function ContactForm() {
  return (
    <section className={styles.container}>
      {/* Left: Form + Buttons */}
      <div className={styles.left}>
        <div className={styles.top_buttons}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} fontSize="24px" type="primary" />
          <Button text="VIA CALL" icon={<MdAddCall />} type="secondary" fontSize="24px" />
        </div>

        <Button text="VIA EMAIL FORM" icon={<MdMessage />}  type="terminary" fontSize="30px" />

        <form className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"  />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"  />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" ></textarea>

          <button type="submit" className={styles.submit_btn}>Submit</button>
        </form>
      </div>
      <div className={styles.images}>
        <img src="/images/Service.svg" alt="Services" />
      </div>
    </section>
  );
}

export default ContactForm;
