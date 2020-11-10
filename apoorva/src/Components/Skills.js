import React from "react";

function Skills() {
  return (
    <form>
      <h3> Please Select your skill-set from the following: </h3>
      <input type="checkbox" id="language1" />
      <label for="language1"> Java </label>
      <br />
      <input type="checkbox" id="language2" />
      <label for="language2"> Angular</label>
      <br />
      <input type="checkbox" id="language3" />
      <label for="language3"> Node JS</label>
      <hr />
    </form>
  );
}

export default Skills;
