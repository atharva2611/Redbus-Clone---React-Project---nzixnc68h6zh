import React from "react";
import "../styles/App.css";

export default function Destination(props) {
  const handleChange = (e) => {
    props.setToMessage(e.target.value);
  };
  return (
    <div id="to">
      <br />
      <input
        type="text"
        id="destination"
        onChange={handleChange}
        value={props.toMessage}
        placeholder="To"
      />
    </div>
  );
}
