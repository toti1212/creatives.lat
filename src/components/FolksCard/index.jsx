import {
  faBehance,
  faDribbble,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faMapMarkerAlt,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./FolksCard.module.scss";

const icons = {
  twitter: faTwitter,
  facebook: faFacebook,
  instagram: faInstagram,
  dribbble: faDribbble,
  linkedin: faLinkedin,
  behance: faBehance,
  youtube: faYoutube,
};

const Folks = ({ name, description, location, languages, social_media }) => (
  <div className={styles.wrapper}>
    <div className={styles.profile}>
      <h3>{name}</h3>
      <dl>
        <dt>
          <FontAwesomeIcon icon={faSuitcase} />
          <span class="sr-only">Work</span>
        </dt>
        <dd>{description}</dd>
        <dt>
          <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
        </dt>
        <dd>{location}</dd>
        <dt>
          <FontAwesomeIcon icon={faGlobe} />{" "}
          <span class="sr-only">Idiomas</span>
        </dt>
        <dd className={styles.languages}>
          <ul>
            {languages
              ? languages.map((lang, i) => <li key={i}>{lang}</li>)
              : null}
          </ul>
        </dd>
        <dt>
          <i class="fa fa-link"></i> <span class="sr-only">Links</span>
        </dt>
        <footer className={styles.social}>
          {social_media
            ? Object.keys(social_media).map((obj, i) => (
                <a href={social_media[obj]} target="_blank" key={i}>
                  <FontAwesomeIcon icon={icons[obj]} />
                </a>
              ))
            : null}
        </footer>
      </dl>
    </div>
  </div>
);

export default Folks;
