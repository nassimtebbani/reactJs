import PropTypes from "prop-types";
import React from "react";
import style from "./style.modules.css";
export default function Profile(props) {
  const { fullName, bio, profession, handleName } = props;
  return (
    <div className={style.myDiv}>
      {props.children}
      <h3>{fullName}</h3>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}> Show the Name </button>
    </div>
  );
}
Profile.defaultProps = {
  fullName: "tebbani nassim",
  bio: "I am a software engineer and designer.",
  profession: "full stack Developer",
};
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
};
