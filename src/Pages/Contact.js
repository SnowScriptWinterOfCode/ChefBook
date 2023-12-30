import React, { memo } from "react";
import styles from "./Contact.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import Button from "../components/Button";

//add you handles here
const ig_id = "/";
const Fb_id = "/";
const LinkIn_id = "/";
const email = "/";

function Contact() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.card}>
        <h1>Connect with us</h1>

        <div className={styles.btns}>
          <Button to={ig_id} icon={<FaInstagramSquare />}>
            Instagram
          </Button>
          <Button to={Fb_id} icon={<FaFacebook />}>
            FaceBook
          </Button>
          <Button to={LinkIn_id} icon={<FaLinkedin />}>
            Linked In
          </Button>
          <Button to={email} icon={<MdOutlineAlternateEmail />}>
            Email Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(Contact);
